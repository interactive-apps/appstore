import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {AppCategories} from '../models/app-categories.model';
import { AppCategoriesActions, AppCategoriesActionTypes } from '../actions/app-categories.actions';
import * as fromAppsHelper from '../../shared/helpers/category-toggle.helper';

export interface State extends EntityState<AppCategories> {
  // additional entities state properties
}

export const adapter: EntityAdapter<AppCategories> = createEntityAdapter<AppCategories>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: AppCategoriesActions
): State {
  switch (action.type) {
    case AppCategoriesActionTypes.AddAppCategories: {
      return adapter.addMany(action.payload, state);
    }

    case AppCategoriesActionTypes.UpsertAppCategories: {
      return adapter.upsertOne(action.payload.appCategories, state);
    }

    // case AppCategoriesActionTypes.AddAppCategoriess: {
    //   return adapter.addOne(action.payload.appCategoriess, state);
    // }

    case AppCategoriesActionTypes.UpsertAppCategoriess: {
      return adapter.upsertMany(action.payload.appCategoriess, state);
    }

    case AppCategoriesActionTypes.UpdateAppCategories: {
      const updatedCategories = fromAppsHelper
        .categoryToggle(state.ids, state.entities, action.payload.id);
      return adapter.upsertMany(updatedCategories, state);
    }

    case AppCategoriesActionTypes.UpdateAppCategoriess: {
      return adapter.updateMany(action.payload.appCategoriess, state);
    }

    case AppCategoriesActionTypes.DeleteAppCategories: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AppCategoriesActionTypes.DeleteAppCategoriess: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AppCategoriesActionTypes.LoadAppCategoriess: {
      return adapter.addAll(action.payload.appCategoriess, state);
    }

    case AppCategoriesActionTypes.ClearAppCategoriess: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getAppCategories = (state: State) => state;
