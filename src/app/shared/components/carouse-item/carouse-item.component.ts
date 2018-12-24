import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carouse-item',
  templateUrl: './carouse-item.component.html',
  styleUrls: ['./carouse-item.component.css']
})
export class CarouseItemComponent implements OnInit {
  @Input() appDetails: any;
  @Input() category: any;
  @Input() showImage: any;

  constructor() {}

  ngOnInit() {}
}
