import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatSlider, MatSliderChange } from '@angular/material/slider';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as X2JS from 'x2js';
import { EditorControlPopupComponent } from './editor-control-popup/editor-control-popup.component';
import { MatMenuTrigger } from '@angular/material/menu';
const x2js = new X2JS();
@Component({
  selector: 'app-editor-container',

  templateUrl: './editor-container.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./editor-container.component.scss'],
})
export class EditorContainerComponent implements OnInit {
  @ViewChild(MatSlider) _matSlider: MatSlider;
  @ViewChild('child') child: EditorControlPopupComponent;
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('demoMessage') demoButton: ElementRef;
  isSidenavOpen: boolean = true;
  zoomValue: any = 25;
  votes: number;
  showFiller = false;
  currentSelectedControl = 1;
  currentMsgFromLeftToPop: any;
  moreOptionStatus: string = '';
  mobile: boolean = false;
  isFrameRendered: boolean = false;
  textFrame: boolean = false;
  textData: boolean = false;
  textDataVal: any;
  disable: boolean = false;
  menu: MatMenuTrigger;
  sizeValue: number = 0;
  isFrameLocked: string = 'no';
  colors = [
    {
      color: 'C: 0, M: 0, Y: 0, K: 0',
      cmykValue: '#ffffff',
    },
    {
      color: 'C: 0, M: 5, Y: 12, K: 0',
      cmykValue: '#fff2e0',
    },
    {
      color: 'C: 0, M: 1, Y: 9, K: 0',
      cmykValue: '#fffce8',
    },
    {
      color: 'C: 5, M: 0, Y: 5, K: 4',
      cmykValue: '#e8f4e8',
    },
    {
      color: 'C: 1, M: 6, Y: 0, K: 4',
      cmykValue: '#f2e6f4',
    },
    {
      color: 'C: 0, M: 9, Y: 6, K: 1',
      cmykValue: '#fce5ed',
    },
    {
      color: 'C: 0, M: 8, Y: 7, K: 0',
      cmykValue: '#ffeaed',
    },
    {
      color: 'C: 0, M: 0, Y: 0, K: 31',
      cmykValue: '#afafaf',
    },
    {
      color: 'C: 0, M: 20, Y: 49, K: 0',
      cmykValue: '#ffcc82',
    },
    {
      color: 'C: 0, M: 4, Y: 38, K: 0',
      cmykValue: '#fff49e',
    },
    {
      color: 'C: 19, M: 0, Y: 18, K: 16',
      cmykValue: '#add6af',
    },
    {
      color: 'C: 25, M: 3, Y: 0, K: 5',
      cmykValue: '#b5eaf2',
    },
    {
      color: 'C: 32, M: 27, Y: 0, K: 20',
      cmykValue: '#8a94cc',
    },
    {
      color: 'C: 4, M: 27, Y: 0, K: 15',
      cmykValue: '#d09ed8',
    },
    {
      color: 'C: 0, M: 40, Y: 26, K: 4',
      cmykValue: '#f492b5',
    },
    {
      color: 'C: 0, M: 33, Y: 33, K: 6',
      cmykValue: '#efa0a0',
    },
    {
      color: 'C: 0, M: 0, Y: 0, K: 63',
      cmykValue: '#5e5e5e',
    },
    {
      color: 'C: 0, M: 40, Y: 99, K: 1',
      cmykValue: '#fc9702',
    },
    {
      color: 'C: 0, M: 5, Y: 54, K: 0',
      cmykValue: '#fff275',
    },
    {
      color: 'C: 36, M: 0, Y: 35, K: 37',
      cmykValue: '#66a068',
    },
    {
      color: 'C: 58, M: 7, Y: 0, K: 12',
      cmykValue: '#5ed0e0',
    },
    {
      color: 'C: 45, M: 38, Y: 0, K: 33',
      cmykValue: '#5d69aa',
    },
    {
      color: 'C: 8, M: 54, Y: 0, K: 31',
      cmykValue: '#a150af',
    },
    {
      color: 'C: 0, M: 80, Y: 53, K: 9',
      cmykValue: '#e82e6d',
    },
    {
      color: 'C: 0, M: 67, Y: 69, K: 10',
      cmykValue: '#e54b47',
    },
    {
      color: 'C: 0, M: 0, Y: 0, K: 100',
      cmykValue: '#000000',
    },
    {
      color: 'C: 0, M: 51, Y: 94, K: 6',
      cmykValue: '#ef750e',
    },
    {
      color: 'C: 0, M: 15, Y: 78, K: 1',
      cmykValue: '#fcd637',
    },
    {
      color: 'C: 26, M: 0, Y: 24, K: 63',
      cmykValue: '#455e47',
    },
    {
      color: '56, M: 6, Y: 0, K: 35',
      cmykValue: '#489ba5',
    },
    {
      color: 'C: 39, M: 36, Y: 0, K: 51',
      cmykValue: '#4c4f7c',
    },
    {
      color: 'C: 19, M: 50, Y: 0, K: 40',
      cmykValue: '#7b4c99',
    },
    {
      color: 'C: 0, M: 95, Y: 62, K: 4',
      cmykValue: '#f40c5d',
    },
    {
      color: 'C: 0, M: 61, Y: 61, K: 28',
      cmykValue: '#b74747',
    },
  ];
  fontFamily: any = [
    {
      fontFamily: 'Acta Deck Bold Bold',
      fontId: 'b06903c9-3fe5-4435-9522-ee1b5bd02952',
      fontType: 'Bold',
    },
    {
      fontFamily: 'Acta Deck Book Regular',
      fontId: 'b2bd22cf-ec91-4c51-9512-9267bcfd067f',
      fontType: 'Regular',
    },
    {
      fontFamily: 'Akzidenz-Grotesk BQ Italic',
      fontId: '30c68cda-3cbe-4038-b613-8be6a35ba6bc',
      fontType: 'Italic',
    },
    {
      fontFamily: 'Akzidenz-Grotesk BQ Medium Italic',
      fontId: 'a5fc81e9-d79f-48cc-9f51-e414279aa8f2',
      fontType: 'Italic',
    },
    {
      fontFamily: 'Akzidenz-Grotesk Pro Bold Regular',
      fontId: '068d58f8-b692-4e19-bbc2-a70a1ff5ef74',
      fontType: 'Regular',
    },
    {
      fontFamily: 'Akzidenz-Grotesk Pro Light Regular',
      fontId: '98353a94-2244-484e-9a1d-c2d7a28ec729',
      fontType: 'Regular',
    },
    {
      fontFamily: 'Minion Pro Regular',
      fontId: '2ef2227d-39d0-4a2e-9cbe-517aaaec1aff',
      fontType: 'Regular',
    },
    {
      fontFamily: 'Myriad Pro Regular',
      fontId: '2751ad89-ff52-488f-ad57-13b5ca7a285a',
      fontType: 'Regular',
    },
    {
      fontFamily: 'Open Sans Bold',
      fontId: '0d888cad-5e07-4b15-bb9a-d43d8875745e',
      fontType: 'Bold',
    },
    {
      fontFamily: 'Open Sans Italic',
      fontId: '095c74db-754e-46b8-bd7c-8b9b8a6f5aeb',
      fontType: 'Italic',
    },
  ];
  menuStatus = false;
  showTextOptions: string = '';
  success: boolean = false;
  toolbarButton: number = 0;
  mobileTextPopUp: boolean = false;
  textFrameSelected: any;
  imageFrame: any;
  isSidenavOpen1:boolean=false
  constructor(private ref: ChangeDetectorRef, private renderer: Renderer2) { }

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
  onSidenavToggle() {
    this.isSidenavOpen = !this.isSidenavOpen;
    console.log("logog "+ this.isSidenavOpen)
  }



  addItem(event: any) {
    if (event && event != null && event === 'success') {
      this.success = true;
      this.isFrameRendered = true;
      this.ref.detectChanges();
    } else if (event && event != null && event === 'image') {
      this.textFrame = false;
      this.imageFrame = event;
      this.isSidenavOpen1=false
      setTimeout(() => {
        this.ref.detectChanges();
      }, 100);
    } else if (event && event != null && event === 'text') {
      this.textFrame = true;
      this.isSidenavOpen1=false

      this.isFrameLocked = window['editorObject'].GetObject(
        'document.selectedFrame.frameConstraints.lockContent'
      ).name;
      this.showTextOptions = event;
      setTimeout(() => {
        this.ref.detectChanges();
      }, 100);
    } else if (event === 'TextSelectionChanged') {
      if (
        window['editorObject'].GetObject('document.selectedText') &&
        window['editorObject'].GetObject('document.selectedText') !== 'null'
      ) {
        let val = window['editorObject'].GetObject(
          'document.selectedText.textFormat'
        ).fontSize;
        this.sizeValue = Number(val);
      }
      this.textData = true;
      this.child.updateTextFrame();
      setTimeout(() => {
        this.ref.detectChanges();
      }, 100);
    }
    else if(event==='null'){
      console.log("no frame selected ")
      this.isSidenavOpen1=true
      console.log("sode nave bar : "+this.isSidenavOpen)
      setTimeout(() => {
        this.ref.detectChanges();
      }, 100);
    }
  }

  fwdMsgToSib2(event: any) {
    this.currentMsgFromLeftToPop = event;
    if (window.screen.width < 550 && event == 0) {
      this.mobileTextPopUp = true;
    }
  }
  setMoreStatus(event: any) {
    this.moreOptionStatus = event;
  }
  onInputChange1(event: any) {
    this.onFontSelection(event);
  }

  onFontSelection(event: any) {
    console.log('font', event);

    var textSelected = window['editorObject'].GetObject(
      'document.selectedText'
    ).length;
    console.log('Selected Test :: ', textSelected);
    if (textSelected != 0) {
      console.log('if conditon');
      window['editorObject'].SetProperty('doc.undoManager', 'holdChanges', true);
      window['editorObject'].SetProperty('document.selectedText.textFormat', 'fontSize', event);
      window['editorObject'].SetProperty('doc.undoManager', 'holdChanges', false);
    } else {
      window['editorObject'].SetProperty('doc.undoManager', 'holdChanges', true);
      window['editorObject'].ExecuteFunction('document.selectedFrame.textFlow.composer.selection', 'SelectAll');
      window['editorObject'].SetProperty('document.selectedText.textFormat', 'fontSize', event);
      window['editorObject'].ExecuteFunction('document.selectedFrame.textFlow.composer.selection', 'Select', '0', '0');

      window['editorObject'].SetProperty('doc.undoManager', 'holdChanges', false);
    }
  }

  changeFontstyle(event: any) {
    // window["editorObject"].ExecuteFunction("document", "SetCursor", 'text');
    // console.log(event);
    let fontExist = window['editorObject'].GetObject(
      'document.fonts[' + event.fontId + ']'
    );
    let textSelected = window['editorObject'].GetObject(
      'document.selectedText'
    ).length;
    //for selected Text
    if (textSelected !== '0') {
      if (fontExist && fontExist != null) {
        window['editorObject'].SetProperty(
          'document.selectedText.textFormat',
          'font',
          'cp_object:document.fonts[' + event.fontId + ']'
        );
      } else {
        console.log('font not availble..!');
        let fID = event.fontId;

        let fName = event.fontFamily;
        //adding fonts
        var newFont = window['editorObject'].ExecuteFunction(
          'document.fonts',
          'Add'
        );
        //Displayed name + style in editor
        window['editorObject'].SetProperty(
          'document.fonts[' + newFont.id + ']',
          'family',
          event.fontFamily
        );
        window['editorObject'].SetProperty(
          'document.fonts[' + newFont.id + ']',
          'style',
          event.fontType
        );
        window['editorObject'].SetProperty('document.fonts[' + newFont.id + ']', 'name',
          fName
        );
        //Setting the font ID (works for the preview)
        window['editorObject'].SetProperty(
          'document.fonts[' + newFont.id + ']',
          'id',
          fID
        );
        console.log('font Added');
        if (newFont) {
          window['editorObject'].SetProperty(
            'document.selectedText.textFormat',
            'font',
            'cp_object:document.fonts[' + event.fontId + ']'
          );
        }
      }
    }
    //for entire frame
    else {
      if (fontExist && fontExist != null) {
        window['editorObject'].ExecuteFunction(
          'document.selectedFrame.textFlow.composer.selection',
          'SelectAll'
        );
        window['editorObject'].SetProperty(
          'document.selectedText.textFormat',
          'font',
          'cp_object:document.fonts[' + event.fontId + ']'
        );
        window['editorObject'].ExecuteFunction(
          'document.selectedFrame.textFlow.composer.selection',
          'Select',
          '0',
          '0'
        );
      } else {
        console.log('font not availble..!');
        let fID = event.fontId;
        let fName = event.fontFamily;
        //adding fonts
        var newFont = window['editorObject'].ExecuteFunction(
          'document.fonts',
          'Add'
        );
        //Displayed name + style in editor
        window['editorObject'].SetProperty(
          'document.fonts[' + newFont.id + ']',
          'family',
          event.fontFamily
        );
        window['editorObject'].SetProperty(
          'document.fonts[' + newFont.id + ']',
          'style',
          event.fontType
        );
        window['editorObject'].SetProperty(
          'document.fonts[' + newFont.id + ']',
          'name',
          fName
        );
        //Setting the font ID (works for the preview)
        window['editorObject'].SetProperty(
          'document.fonts[' + newFont.id + ']',
          'id',
          fID
        );
        console.log('font Added');
        if (newFont) {
          window['editorObject'].ExecuteFunction(
            'document.selectedFrame.textFlow.composer.selection',
            'SelectAll'
          );
          window['editorObject'].SetProperty(
            'document.selectedText.textFormat',
            'font',
            'cp_object:document.fonts[' + event.fontId + ']'
          );
          window['editorObject'].ExecuteFunction(
            'document.selectedFrame.textFlow.composer.selection',
            'Select',
            '0',
            '0'
          );
        }
      }
    }
  }

  deleteFrame() {
    window['editorObject'].ExecuteFunction('document.selectedFrame', 'Delete');
  }

  underLineText() {
    //window["editorObject"].ExecuteFunction("document", "SetCursor", 'text');
    let strick = window['editorObject'].GetObject(
      'document.selectedText.textFormat.underLine'
    );
    let textSelected = window['editorObject'].GetObject(
      'document.selectedText'
    ).length;
    if (textSelected != 0) {
      if (!strick) {
        window['editorObject'].SetProperty(
          'document.selectedText.textFormat',
          'underLine',
          true
        );
      } else {
        window['editorObject'].SetProperty(
          'document.selectedText.textFormat',
          'underLine',
          false
        );
      }
    } else {
      if (!strick) {
        window['editorObject'].ExecuteFunction(
          'document.selectedFrame.textFlow.composer.selection',
          'SelectAll'
        );
        window['editorObject'].SetProperty(
          'document.selectedText.textFormat',
          'underLine',
          true
        );
        window['editorObject'].ExecuteFunction(
          'document.selectedFrame.textFlow.composer.selection',
          'Select',
          '0',
          '0'
        );
      } else {
        window['editorObject'].ExecuteFunction(
          'document.selectedFrame.textFlow.composer.selection',
          'SelectAll'
        );
        window['editorObject'].SetProperty(
          'document.selectedText.textFormat',
          'underLine',
          false
        );
        window['editorObject'].ExecuteFunction(
          'document.selectedFrame.textFlow.composer.selection',
          'Select',
          '0',
          '0'
        );
      }
    }
  }
  StrickText() {
    //window["editorObject"].ExecuteFunction("document", "SetCursor", 'text');

    //let textSelected = window['editorObject'].GetObject('document.selectedText').length
    let strick = window['editorObject'].GetObject(
      'document.selectedText.textFormat.lineThrough'
    );
    let textSelected = window['editorObject'].GetObject(
      'document.selectedText'
    ).length;
    if (textSelected != 0) {
      if (!strick) {
        // window['editorObject'].GetObject('document.selectedText')
        window['editorObject'].SetProperty(
          'document.selectedText.textFormat',
          'lineThrough',
          true
        );
      } else {
        window['editorObject'].SetProperty(
          'document.selectedText.textFormat',
          'lineThrough',
          false
        );
      }
    } else {
      if (!strick) {
        window['editorObject'].ExecuteFunction(
          'document.selectedFrame.textFlow.composer.selection',
          'SelectAll'
        );
        window['editorObject'].SetProperty(
          'document.selectedText.textFormat',
          'lineThrough',
          true
        );
        window['editorObject'].ExecuteFunction(
          'document.selectedFrame.textFlow.composer.selection',
          'Select',
          '0',
          '0'
        );
      } else {
        window['editorObject'].ExecuteFunction(
          'document.selectedFrame.textFlow.composer.selection',
          'SelectAll'
        );
        window['editorObject'].SetProperty(
          'document.selectedText.textFormat',
          'lineThrough',
          false
        );
        window['editorObject'].ExecuteFunction(
          'document.selectedFrame.textFlow.composer.selection',
          'Select',
          '0',
          '0'
        );
      }
    }
  }

  lockFrame() {
    let FrameLocked = window['editorObject'].GetObject(
      'document.selectedFrame.frameConstraints.lockContent'
    ).name;
    console.log('frameLocked :: ', this.isFrameLocked);
    if (FrameLocked === 'yes') {
      console.log('if loop');
      window['editorObject'].SetProperty(
        'document.selectedFrame.frameConstraints',
        'lockContent',
        'no'
      );
      this.isFrameLocked = 'no';
      window['editorObject'].ExecuteFunction('document', 'SetCursor', 'text');
      window['editorObject'].Alert('Frame  unlocked.');
    } else if (FrameLocked === 'inherit') {
      console.log('Locked');
      window['editorObject'].SetProperty(
        'document.selectedFrame.frameConstraints',
        'lockContent',
        'yes'
      );
      this.isFrameLocked = 'yes';
      window['editorObject'].ExecuteFunction(
        'document',
        'SetCursor',
        'pointer'
      );
      window['editorObject'].Alert('Frame  locked.');
    } else if (FrameLocked === 'no') {
      console.log('esle loop..!');
      window['editorObject'].SetProperty(
        'document.selectedFrame.frameConstraints',
        'lockContent',
        'yes'
      );
      this.isFrameLocked = 'yes';
      window['editorObject'].ExecuteFunction(
        'document',
        'SetCursor',
        'pointer'
      );
      window['editorObject'].Alert(' Selected frame locked successfully.');
    }
  }
  textLeft() {
    window['editorObject'].SetProperty(
      'document.selectedText.textFormat',
      'textAlign',
      'left'
    );
  }
  textCenter() {
    window['editorObject'].SetProperty(
      'document.selectedText.textFormat',
      'textAlign',
      'center'
    );
  }
  textRight() {
    window['editorObject'].SetProperty(
      'document.selectedText.textFormat',
      'textAlign',
      'right'
    );
  }
  public IncrementSlider() {
    this._matSlider['_increment'](5);
    this._matSlider['_emitInputEvent']();
    this._matSlider['_emitChangeEvent']();
  }

  public DecrementSlider() {
    this._matSlider['_increment'](-5);
    console.log('MAT SLIDER ::  ' + this._matSlider['_increment'](-5));
    this._matSlider['_emitInputEvent']();
    this._matSlider['_emitChangeEvent']();
  }

  cmyk(event: any) {
    let con = event.color;
    let newstring = con.replace(/[^0-9,]/g, '');
    let cmyk: any = JSON.parse('[' + newstring + ']');
    console.log('text color..!!!!');
    window['editorObject'].SetProperty('doc.undoManager', 'holdChanges', true);
    //window['editorObject'].SetProperty('document.selectedText.textFormat.color','colorValue','cmyk:'+cmyk[0]+'-'+cmyk[1]+'-'+cmyk[2]+'-'+cmyk[3]+'')

    var newColor = window['editorObject'].ExecuteFunction(
      'document.colors',
      'Add'
    );
    window['editorObject'].SetProperty(
      'document.colors[' + newColor.id + ']',
      'name',
      event.cmykValue
    );
    window['editorObject'].SetProperty(
      'document.colors[' + newColor.id + ']',
      'type',
      'CMYK'
    );
    window['editorObject'].SetProperty(
      'document.colors[' + newColor.id + ']',
      'c',
      cmyk[0]
    );
    window['editorObject'].SetProperty(
      'document.colors[' + newColor.id + ']',
      'm',
      cmyk[1]
    );
    window['editorObject'].SetProperty(
      'document.colors[' + newColor.id + ']',
      'y',
      cmyk[2]
    );
    window['editorObject'].SetProperty(
      'document.colors[' + newColor.id + ']',
      'k',
      cmyk[3]
    );
    window['editorObject'].SetProperty(
      'document.selectedText.textFormat',
      'color',
      'cp_object:document.colors[' + newColor.id + ']'
    );
    window['editorObject'].SetProperty('doc.undoManager', 'holdChanges', false);
  }
  increamentSize() {
    this.sizeValue += 5;
    this.onFontSelection(this.sizeValue);
  }
  decreamentSize() {
    if (this.sizeValue > 0) {
      this.sizeValue -= 5;
      this.onFontSelection(this.sizeValue);
    }
  }
  closeMenu() {
    if (this.menuStatus) {
      console.log('clicked outside');
      this.menu.closeMenu();
      this.toolbarButton = 0;
      this.menuStatus = false;
    }
  }
  isOpened(e: any) {
    // this.menuStatus = true;
    console.log(e, 'event of isopened');
  }
  buttonClicked(index: number) {
    this.toolbarButton = index;
  }
  zoomFrame(value: any) {
    window['editorObject'].SetProperty('document', 'zoom', value);
  }

  sendMessage() {
    var myCustomData = {
      name: 'CustomMessage',
      body: 'This is a custom event triggered from Iframe',
    };
    var event = new CustomEvent('myEvent', { detail: myCustomData });
    window.parent.document.dispatchEvent(event);
  }
  ngOnInit(): void { }
}
