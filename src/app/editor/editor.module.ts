import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    EditorComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    EditorComponent
  ]
})
export class EditorModule { }
