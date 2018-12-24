import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../../store/reducers/index';
import {getAppsCategoriesState} from '../../store/selectors/app-categories.selectors';
import {getAppsStateList} from '../../store/selectors/apps-state.selectors';
import {FilterByPipe} from 'ngx-pipes';
import {UpdateAppCategories} from '../../store/actions/app-categories.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilterByPipe]
})
export class HomeComponent implements OnInit {
  topThreeApps$: Observable<any>;
  allAppsState$: Observable<any>;
  appsCategories$: Observable<any>;
  searchText = '';
  selectedCategory: any;

  constructor(private store: Store<AppState>) {
   this.appsCategories$ = this.store.select(getAppsCategoriesState);
   this.allAppsState$ = this.store.select(getAppsStateList);
    this.store.select(getAppsCategoriesState).subscribe((categoriesIds: any) => {
      if (categoriesIds.ids.length > 0) {
        categoriesIds.ids.forEach((category: any) => {
          if (categoriesIds.entities[category].isSelected) {
            this.selectedCategory = categoriesIds.entities[category];
          }
        });
      }
    });
  }

  ngOnInit() {}

  trackByFn(index, item) {
    return item.id;
  }

  onSearchApps(e) {
    if (e) {
      e.stopPropagation();
    }
    this.searchText = e ? e.target.value.trim() : this.searchText;
  }

  toggleCategory(e, categoryId) {
    this.store.dispatch(new UpdateAppCategories({id: categoryId, status: true}));
  }

  getRandomApp(appsArray: any[]) {
    const totalApps = appsArray.length;
    const randomSelection = Math.floor((Math.random() * totalApps) + 0);
    return appsArray[randomSelection];
  }

}
