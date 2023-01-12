import { Component, Input, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/shared/application.service';
import * as X2JS from 'x2js';
const x2js = new X2JS();
@Component({
  selector: 'app-editor-control-popup',
  templateUrl: './editor-control-popup.component.html',
  styleUrls: ['./editor-control-popup.component.scss'],
})
export class EditorControlPopupComponent implements OnInit {
  inputNumber = 'Enter your text data here';
  textValue: any;
  toDos: any[] = [];
  textFrame: boolean = false;
  text = '';
  @Input() currentMsgFromLeftToPop: number;
  @Input() textDataVal: any;
  fileName: any;
  fileToUpload: any;
  fileType: any;
  value: boolean;
  preview: boolean;
  constructor( private applicationService : ApplicationService) { }

  addFrame(): string {
    var frame = window['editorObject'].ExecuteFunction(
      'document.selectedPage.frames',
      'Add',
      'text',
      '10mm',
      '50mm',
      '100mm',
      '70mm'
    );
    window['editorObject'].ExecuteFunction(
      'document.selectedPage.frames[' + frame.id + ']',
      'ImportTextFlow',
      '<TextFlow xmlns="http://ns.adobe.com/textLayout/2008"><p fontFamily="Minion Pro_Regular" fontSize="25" color="#000000" trackingRight="0" typographicCase="default" baselineShift="0" lineHeight="120%" alignToBaseLine="false" paragraphStartIndent="0" paragraphEndIndent="0" textIndent="0" paragraphSpaceBefore="0" paragraphSpaceAfter="0" textAlign="left" textAlignLast="left" my_paragraphStyle="" textOverprint="false"><span fontFamily="Arial_Regular" fontSize="25" color="#b86595" my_color="26b6741c-22de-be9a-2cc6-f1fa77a0d9d0" copyfit_origSize="25">Enter your text data here</span></p></TextFlow>',
      true
    );
    return frame.id;
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  updateTextFrame() {
    let frameSelected = window['editorObject'].GetObject(
      'document.selectedFrame'
    );
    if (frameSelected && frameSelected !== 'null') {
      let frame = window['editorObject'].GetObject(
        'document.selectedFrame.type.name'
      );
      if (frame === 'text') {
        let cons = window['editorObject'].GetObject('document.selectedFrame');
        let JsonObj = JSON.stringify(cons);
        let frameId = JSON.parse(JsonObj).id;
        let textSpan = window['editorObject'].ExecuteFunction("document.allFrames[" + frameId + "]", "GetText", false, true);
        this.toDos.forEach((element, index) => {
          if (element.frameId === frameId) {
            this.toDos[index].textValue = textSpan;
          }
        });
      }
    }
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
  addInputField() {
    let frameId = this.addFrame();
    let Json = {
      textValue: '',
      frameId: frameId,
    };
    this.toDos.push(Json);
  }

  getTextFlow(event: any, index: any) {
    var textFlow = window['editorObject'].ExecuteFunction('document.allFrames[' + event.frameId + ']', 'GetText', true, true);
    let xml = x2js.xml2js(textFlow);
    xml = x2js.xml2js(textFlow);
    let fontSize = '"' + 35 + '"';
    let color = '"' + " #000000" + '"';
    let fontFamily = '"' + "Arial Regular" + '"';
    let textSpan = event.textValue;
    let UpdatetextFlow = '<TextFlow xmlns="http://ns.adobe.com/textLayout/2008"><p><span fontFamily=' + fontFamily + ' fontSize=' + fontSize + ' color=' + color + '>' + textSpan + '</span></p></TextFlow>'
    window['editorObject'].ExecuteFunction("document.allFrames[" + event.frameId + "]", 'ImportTextFlow', UpdatetextFlow, true);


  }
  getAllTextFramesInTemplate() {
   
    let allFramesLength = window['editorObject'].GetObject(
      'document.allFrames.length'
    );
    for (let i = 0; i < allFramesLength; i++) {
      let textData = window['editorObject'].GetObject(
        'document.allFrames[' + i + '].type.name'
      );
      if (textData === 'text') {
        let cons = window['editorObject'].GetObject(
          'document.allFrames[' + i + ']'
        );
        let textSpan = window['editorObject'].ExecuteFunction("document.document.allFrames[" + i + "]", "GetText", false, true);
        let JsonObj = JSON.stringify(cons);
        let Json = {
          textValue:textSpan,
          frameId: JSON.parse(JsonObj).id,
        };
        this.toDos.push(Json);
      }
    }
  
  }

  //image uploD
  onFileSelected(event: any) {
    this.fileName = event.target.files.item(0).name;
    this.fileToUpload = event.target.files.item(0); this.fileType = event.target.files.item(0).type
    console.log(this.fileType)
    if (this.fileType === 'image/png') {
      // this.templates.push(this.fileName);

      this.value = false;
    }
    else {
      this.value = true
      //this.templates.
    }
  }

  getuploadFile() {
   // this.progressDisplay = true;
    console.log(this.fileToUpload)
    this.applicationService.uploadFiles(this.fileToUpload).subscribe((response) => {
      console.log(response['apiKey'])
      if (response) {
        let xmlContent = response['apiKey']

        var frame = window['editorObject'].ExecuteFunction(
          'document.selectedPage.frames',
          'Add',
          'image',
          '10mm',
          '50mm',
          '150mm',
          '150mm'
        );
        window['editorObject'].ExecuteFunction("document.selectedPage.frames[" + frame.id + "]","LoadContentFromXmlString",xmlContent)
        // window['editorObject'].ExecuteFunction("document.selectedFrame","LoadContentFromXmlString",'')
        this.value = true;
        
      }
      })
       

    
  }

  ngOnInit(): void {
    if (window.screen.width > 550) {
      this.currentMsgFromLeftToPop = 0;
    } else {
      document.getElementById('popup').style.backgroundColor = 'transparent';
    }
    this.getAllTextFramesInTemplate();
  }
}