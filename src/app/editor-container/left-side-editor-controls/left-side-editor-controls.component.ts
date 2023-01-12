import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-side-editor-controls',
  templateUrl: './left-side-editor-controls.component.html',
  styleUrls: ['./left-side-editor-controls.component.scss']
})
export class LeftSideEditorControlsComponent implements OnInit {
  @Output() valueToPopUp = new EventEmitter<any>();
  value: any = "";
  editorButtons= [
    {
      name : "Text",
      matIcon:"text_format",
    },
    {
      name : "Image",
      matIcon:"add_photo_alternate",

    },
    {
      name : "Background",
      matIcon:"color_lens",

    },
    {
      name : "Qr Code",
      matIcon:"qr_code",

    },
    {
      name : "Layers",
      matIcon:"layers",

    },
  ]
  constructor() { }

 
    

  ngOnInit(): void {
  }

  clickButton(index:number){
    this.value = index;
    console.log(index)
    this.valueToPopUp.emit(index);
  }
}
