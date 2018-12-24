import {Component, OnInit} from '@angular/core';
import {AppState} from './store/reducers';
import {Store} from '@ngrx/store';
import {AddAppCategories, AddAppStates} from './store/actions';
import {appCategories} from './store/apps-data/app-categories';
import {applications} from './store/apps-data/applications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new AddAppCategories(appCategories));

    // minor delay for the loaders to appear
    setTimeout(() => {
      this.store.dispatch(new AddAppStates({apps: applications}));
    }, 2000);
  }

  ngOnInit() {}
}
