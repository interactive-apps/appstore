import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseItemFeaturesComponent } from './carouse-item-features.component';

describe('CarouseItemFeaturesComponent', () => {
  let component: CarouseItemFeaturesComponent;
  let fixture: ComponentFixture<CarouseItemFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouseItemFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouseItemFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
