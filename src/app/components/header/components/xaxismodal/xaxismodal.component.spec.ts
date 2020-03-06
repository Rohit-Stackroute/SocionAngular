import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XaxismodalComponent } from './xaxismodal.component';

describe('XaxismodalComponent', () => {
  let component: XaxismodalComponent;
  let fixture: ComponentFixture<XaxismodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XaxismodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XaxismodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
