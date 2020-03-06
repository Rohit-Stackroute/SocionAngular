import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaxismodalComponent } from './yaxismodal.component';

describe('YaxismodalComponent', () => {
  let component: YaxismodalComponent;
  let fixture: ComponentFixture<YaxismodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaxismodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaxismodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
