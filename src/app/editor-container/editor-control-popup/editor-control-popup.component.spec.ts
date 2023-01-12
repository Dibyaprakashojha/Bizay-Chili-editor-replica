import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorControlPopupComponent } from './editor-control-popup.component';

describe('EditorControlPopupComponent', () => {
  let component: EditorControlPopupComponent;
  let fixture: ComponentFixture<EditorControlPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorControlPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorControlPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
