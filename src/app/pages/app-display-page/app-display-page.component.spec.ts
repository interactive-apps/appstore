import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDisplayPageComponent } from './app-display-page.component';

describe('AppDisplayPageComponent', () => {
  let component: AppDisplayPageComponent;
  let fixture: ComponentFixture<AppDisplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDisplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
