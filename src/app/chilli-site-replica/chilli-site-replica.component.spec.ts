import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizaySiteReplicaComponent } from './chilli-site-replica.component';

describe('BizaySiteReplicaComponent', () => {
  let component: BizaySiteReplicaComponent;
  let fixture: ComponentFixture<BizaySiteReplicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizaySiteReplicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BizaySiteReplicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
