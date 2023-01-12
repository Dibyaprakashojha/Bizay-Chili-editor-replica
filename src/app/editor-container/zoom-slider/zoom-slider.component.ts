import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSlider, MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-zoom-slider',
  templateUrl: './zoom-slider.component.html',
  styleUrls: ['./zoom-slider.component.scss']
})
export class ZoomSliderComponent implements OnInit {
  @ViewChild(MatSlider) _matSlider: MatSlider;
  vertical:any;
  zoomValue:any = 100;
  percentValue:string="%"
  @Output() MoreStatus = new EventEmitter<string>();
  optionType: string = "More";
  constructor() { }
  
  public IncrementSlider(){
    this._matSlider['_increment'](25);
    this._matSlider['_emitInputEvent']();
    this._matSlider['_emitChangeEvent']();
  }

   public DecrementSlider(){
    this._matSlider['_increment'](-25);
    console.log("MAT SLIDER ::  "+this._matSlider['_increment'](-25))
    this._matSlider['_emitInputEvent']();
    this._matSlider['_emitChangeEvent']();
  }

  undoChanges(){
    window["editorObject"].ExecuteFunction("document.undoManager", "Undo", 1);
  }

  redoChanges(){
    window["editorObject"].ExecuteFunction("document.undoManager", "Redo", 1);
  }


  onZoomChange(event:any){
    this.zoomFrame(event);
  }
  onInputChange(event: MatSliderChange) {
    this.zoomValue = event.value;
    this.zoomFrame(this.zoomValue);
  }

  zoomFrame(value:any){
    window["editorObject"].SetProperty("document", "zoom", value);

  }
  zoomFitPage(){
    window['editorObject'].ExecuteFunction("document.editor","Fit","page");
  }
  zoomHeigth(){
    window['editorObject'].ExecuteFunction("document.editor","Fit","Heigth");
  }
  zoomWidth(){
    window['editorObject'].ExecuteFunction("document.editor","Fit","width");
  }
  zoomFullScreen(){
    window['editorObject'].ExecuteFunction("document.editor","Fit","Fullscreen");
  }

  ngOnInit(): void {
  }
  showMore(){
   this.MoreStatus.emit("showMore");
   this.optionType = "Less";
  }
  showLess(){
    this.MoreStatus.emit("showLess");
    this.optionType = "More";
  }
}
