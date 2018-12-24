import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDescriptionPageComponent } from './app-description-page.component';

describe('AppDescriptionPageComponent', () => {
  let component: AppDescriptionPageComponent;
  let fixture: ComponentFixture<AppDescriptionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDescriptionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
