import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromAppsState from './app-state.reducer';
import {environment} from '../../../environments/environment';
import * as fromAppCategories from './app-categories.reducer';

export interface AppState {
  appsState: fromAppsState.State;
  appCategories: fromAppCategories.State;
}

export const reducers: ActionReducerMap<AppState> = {
  appsState: fromAppsState.reducer,
  appCategories: fromAppCategories.reducer,
};

export const getAppCategoriesState = (state: AppState) => state.appCategories;
export const getAppsState = (state: AppState) => state.appsState;


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
