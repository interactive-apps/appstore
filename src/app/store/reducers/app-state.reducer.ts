import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {AppsStateModel} from '../models/app-state.model';
import { AppStateActions, AppStateActionTypes } from '../actions/app-state.actions';

export interface State extends EntityState<AppsStateModel> {
  // additional entities state properties
  entities: any;
}

export const adapter: EntityAdapter<AppsStateModel> = createEntityAdapter<AppsStateModel>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  entities: [],
});

export function reducer(
  state = initialState,
  action: AppStateActions
): State {
  switch (action.type) {
    case AppStateActionTypes.AddAppState: {
      return adapter.addOne(action.payload.appState, state);
    }

    case AppStateActionTypes.UpsertAppState: {
      return adapter.upsertOne(action.payload.appState, state);
    }

    case AppStateActionTypes.AddAppStates: {
      return {...state, entities: action.payload.apps};
    }

    case AppStateActionTypes.UpsertAppStates: {
      return adapter.upsertMany(action.payload.appStates, state);
    }

    case AppStateActionTypes.UpdateAppState: {
      return adapter.updateOne(action.payload.appState, state);
    }

    case AppStateActionTypes.UpdateAppStates: {
      return adapter.updateMany(action.payload.appStates, state);
    }

    case AppStateActionTypes.DeleteAppState: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AppStateActionTypes.DeleteAppStates: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AppStateActionTypes.LoadAppStates: {
      return adapter.addAll(action.payload.appStates, state);
    }

    case AppStateActionTypes.ClearAppStates: {
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

export const getAppsListState = (state: State) => state;
