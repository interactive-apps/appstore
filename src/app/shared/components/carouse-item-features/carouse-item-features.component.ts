import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carouse-item-features',
  templateUrl: './carouse-item-features.component.html',
  styleUrls: ['./carouse-item-features.component.css']
})
export class CarouseItemFeaturesComponent implements OnInit {
  @Input() feature: any;
  @Input() category: any;
  @Input() showImage: any;

  constructor() { }

  ngOnInit() {
  }

}
