import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '../../store/reducers';
import {Store} from '@ngrx/store';
import {getAppsStateList} from '../../store/selectors/apps-state.selectors';
import {getAppsCategoriesState} from '../../store/selectors/app-categories.selectors';

@Component({
  selector: 'app-app-display-page',
  templateUrl: './app-display-page.component.html',
  styleUrls: ['./app-display-page.component.css']
})
export class AppDisplayPageComponent implements OnInit {

  apps$: Observable<any>;
  selectedApp: any;
  appsCategories$: Observable<any>;

  constructor(private router: Router, private store: Store<AppState>) {
    const currentRoute = this.router.url;
    const currentSelectedAppId = currentRoute.split('/')[3] ?
      currentRoute.split('/')[3] : '';
    // this.apps$ = this.store.select(getAppsStateList);
      this.store.select(getAppsStateList).subscribe((appsState: any) => {
        if (appsState.entities.length > 0) {
          appsState.entities.forEach((app: any) => {
            if (app.id === currentSelectedAppId) {
              this.selectedApp = app;
            }
          });
        }

      });
    this.appsCategories$ = this.store.select(getAppsCategoriesState);
  }

  ngOnInit() {
  }

}
