import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-item-list-holder',
  templateUrl: './app-item-list-holder.component.html',
  styleUrls: ['./app-item-list-holder.component.css']
})
export class AppItemListHolderComponent implements OnInit {
  @Input() appDetails: any;
  @Input() category: any;

  constructor() { }

  ngOnInit() {
  }

}
