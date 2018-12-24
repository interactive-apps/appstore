import {createSelector} from '@ngrx/store';
import * as fromMainReducer from '../reducers';
import * as fromAppsStateReducer from '../reducers/app-state.reducer';

export const getAppsStateList = createSelector(
  fromMainReducer.getAppsState,
  fromAppsStateReducer.getAppsListState
);
