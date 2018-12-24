import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppItemListHolderComponent } from './app-item-list-holder.component';

describe('AppItemListHolderComponent', () => {
  let component: AppItemListHolderComponent;
  let fixture: ComponentFixture<AppItemListHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppItemListHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppItemListHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
