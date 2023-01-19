import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalConfig as config } from '../config/config';
import { ApplicationService } from '../shared/application.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  editorUrl: any;
  textFrame: any;
  templateId: any;
  @Output() newEvent = new EventEmitter<any>();
  apiKey: any;

  constructor(private sanitizer: DomSanitizer,
    private route: Router,
    private routes: ActivatedRoute,
    private applicationService: ApplicationService,
  ) { }

  onWindowsEditorEvent = (type: any, targetID: any) => {
    if ("DocumentFullyLoaded" === type) {
      console.log("Editor Load")
      this.onEditorLoaded();
    }
    else if ("DocumentFullyRendered" === type) {
      window["editorObject"].SetProperty("document.viewPreferences", 'showScrolls', false)
      this.newEvent.emit("success");
    }
    else if ("SelectedFrameChanged" === type) {
      console.log("frame selected");
      let frameSelected = window["editorObject"].GetObject('document.selectedFrame');
      if (frameSelected && frameSelected !== 'null') {
        this.textFrame = window["editorObject"].GetObject('document.selectedFrame.type.name');
        this.newEvent.emit(this.textFrame);
      }
      let unslected =window["editorObject"].GetObject('document.selectedFrame')
      console.log("unselected"+ unslected)
      if(unslected==='null'|| unslected===null){
        console.log("nullllll ")
        this.newEvent.emit("null");
      }


    }
    else if ("TextSelectionChanged" === type) {
      this.newEvent.emit("TextSelectionChanged");
      console.log("TextSelectionChange.")

    }
    else if ("CursorChanged" === type) {
      this.newEvent.emit("CursorChanged");
      console.log("Current cusor ::" + window["editorObject"].GetObject("document.cursor").name)

    }
    else if ("FrameMoveFinished" === type) {
      console.log("Frame findied changes :: ")
      if (this.textFrame === 'text') {
        window["editorObject"].ExecuteFunction("document", "SetCursor", 'pointer');
      }
    }
    else if ("FrameMoveInProgress" === type) {
    }
    else if ("SelectedPageChanged" === type) {
      this.newEvent.emit("SelectedPageChanged");
    }

  };
  onEditorLoaded(): any {
    window["editorObject"] = (
      document.getElementById("chili-iframe1") as HTMLIFrameElement
    ).contentWindow["editorObject"];
    if (window["editorObject"]) {
      window["editorObject"].AddListener("DocumentFullyLoaded");
      window["editorObject"].AddListener("DocumentFullyRendered");
      window["editorObject"].AddListener("SelectedFrameChanged");
      window["editorObject"].AddListener("TextSelectionChanged");
      window["editorObject"].AddListener("CursorChanged");
      window["editorObject"].AddListener("FrameMoveFinished");
      window["editorObject"].AddListener("FrameMoveInProgress");
      window["editorObject"].AddListener("SelectedPageChanged");
      window["editorObject"].AddListener("HighlightedFrameChanged");
    }
  }
  openeditor(event: any) {
    window["editorObject"].SetSelectedPage(event)
  }

  templateUrl(docId:any) {
    this.applicationService.getCHILIAPIKey().subscribe((response) => {
      let apiKey = response['apiKey'];
      console.log(response['apiKey'])
    
    let base = config.ChiliBaseUrl();
    let url = base + '/Acheron/editor_html.aspx?doc=' + docId + '&ws=7e09bb4e-e86c-4461-a309-a77dc365db00&vp=3a24d38f-9494-49f5-8a79-8f0b50ad6168&apiKey=' + apiKey + '&initialUserView=user'

    this.editorUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log("URL :: ", this.editorUrl)
  });
  }



  alignTop() {
    window['editorObject'].SetProperty("document.selectedFrame", 'verticalAlign', "top")
  }

  alignMiddle() {
    window['editorObject'].SetProperty("document.selectedFrame", 'verticalAlign', "middle")
  }

  alignJustify() {
    window['editorObject'].SetProperty("document.selectedFrame", 'verticalAlign', "justify")
  }

  alignBottom() {
    window['editorObject'].SetProperty("document.selectedFrame", 'verticalAlign', "bottom")
  }

  urlParId() {
    this.applicationService.getCHILIAPIKey().subscribe((response) => {
      this.apiKey = response['apiKey'];
      console.log(response['apiKey'])

      // if (apiKey) {
      //   this.templateUrl(apiKey);

      // }
    });    
    this.templateId = '9afd66c3-77f2-4cd2-9ccd-a4abaa891bf9'
    this.route.navigate(["chili"], {
      queryParams: {
        docId: this.templateId,
      },
    });
    this.routes.queryParams.subscribe((param: any) => {
      this.templateId = param.docId;
      this.templateUrl(param.docId);

    });
    
  }
  getApiKey() {
    this.applicationService.getCHILIAPIKey().subscribe((response) => {
      let apiKey = response['apiKey'];
      console.log(response['apiKey'])
      if (apiKey) {
        this.templateUrl(apiKey);
      }
    });
  }
  ngOnInit(): void {
    //this.getApiKey()
    window['OnEditorEvent'] = this.onWindowsEditorEvent;
    this.urlParId();
  }
}
