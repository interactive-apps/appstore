import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReleasePageComponent } from './app-release-page.component';

describe('AppReleasePageComponent', () => {
  let component: AppReleasePageComponent;
  let fixture: ComponentFixture<AppReleasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppReleasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReleasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
