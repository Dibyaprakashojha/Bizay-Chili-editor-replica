import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from './../editor/editor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorContainerComponent } from './editor-container.component';
import { LeftSideEditorControlsComponent } from './left-side-editor-controls/left-side-editor-controls.component';
import { EditorControlPopupComponent } from './editor-control-popup/editor-control-popup.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { MaterialModule } from '../material.module';
import { ZoomSliderComponent } from './zoom-slider/zoom-slider.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { FormsModule } from '@angular/forms';
import { clickOutsideDirectiveModule } from '../shared/click-outside.directive';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    EditorContainerComponent,
    LeftSideEditorControlsComponent,
    EditorControlPopupComponent,
    PageContainerComponent,
    ZoomSliderComponent,
    FooterBarComponent,
  ],
  imports: [
    CommonModule,
    EditorModule,
    BrowserModule,
    MaterialModule,
    MatMenuModule,
    FormsModule,
    clickOutsideDirectiveModule,
  ],
  exports: [EditorContainerComponent],
})
export class EditorContainerModule {}
