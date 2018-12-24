import {createSelector} from '@ngrx/store';
import * as fromMainReducer from '../reducers';
import * as fromAppsCategories from '../reducers/app-categories.reducer';

export const getAppsCategoriesState = createSelector(
  fromMainReducer.getAppCategoriesState,
  fromAppsCategories.getAppCategories
);
