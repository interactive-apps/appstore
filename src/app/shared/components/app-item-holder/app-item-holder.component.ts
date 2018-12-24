import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-item-holder',
  templateUrl: './app-item-holder.component.html',
  styleUrls: ['./app-item-holder.component.css']
})
export class AppItemHolderComponent implements OnInit {

  @Input() appDetails: any;
  @Input() category: any;

  constructor() { }

  ngOnInit() {}

}
