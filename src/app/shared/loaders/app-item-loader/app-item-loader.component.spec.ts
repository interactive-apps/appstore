import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppItemLoaderComponent } from './app-item-loader.component';

describe('AppItemLoaderComponent', () => {
  let component: AppItemLoaderComponent;
  let fixture: ComponentFixture<AppItemLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppItemLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppItemLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
