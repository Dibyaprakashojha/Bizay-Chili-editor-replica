import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideEditorControlsComponent } from './left-side-editor-controls.component';

describe('LeftSideEditorControlsComponent', () => {
  let component: LeftSideEditorControlsComponent;
  let fixture: ComponentFixture<LeftSideEditorControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideEditorControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSideEditorControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
