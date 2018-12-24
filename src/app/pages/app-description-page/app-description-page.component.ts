import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-description-page',
  templateUrl: './app-description-page.component.html',
  styleUrls: ['./app-description-page.component.css']
})
export class AppDescriptionPageComponent implements OnInit {

  @Input() description: any;
  @Input() features: any;

  constructor() { }

  ngOnInit() {
  }

}
