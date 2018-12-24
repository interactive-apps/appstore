import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { AppsStateModel } from '../models/app-state.model';

export enum AppStateActionTypes {
  LoadAppStates = '[AppState] Load AppStates',
  AddAppState = '[AppState] Add AppState',
  UpsertAppState = '[AppState] Upsert AppState',
  AddAppStates = '[AppState] Add AppStates',
  UpsertAppStates = '[AppState] Upsert AppStates',
  UpdateAppState = '[AppState] Update AppState',
  UpdateAppStates = '[AppState] Update AppStates',
  DeleteAppState = '[AppState] Delete AppState',
  DeleteAppStates = '[AppState] Delete AppStates',
  ClearAppStates = '[AppState] Clear AppStates'
}

export class LoadAppStates implements Action {
  readonly type = AppStateActionTypes.LoadAppStates;

  constructor(public payload: { appStates: AppsStateModel[] }) {}
}

export class AddAppState implements Action {
  readonly type = AppStateActionTypes.AddAppState;

  constructor(public payload: { appState: AppsStateModel }) {}
}

export class UpsertAppState implements Action {
  readonly type = AppStateActionTypes.UpsertAppState;

  constructor(public payload: { appState: AppsStateModel }) {}
}

export class AddAppStates implements Action {
  readonly type = AppStateActionTypes.AddAppStates;

  constructor(public payload: any) {}
}

export class UpsertAppStates implements Action {
  readonly type = AppStateActionTypes.UpsertAppStates;

  constructor(public payload: { appStates: AppsStateModel[] }) {}
}

export class UpdateAppState implements Action {
  readonly type = AppStateActionTypes.UpdateAppState;

  constructor(public payload: { appState: Update<AppsStateModel> }) {}
}

export class UpdateAppStates implements Action {
  readonly type = AppStateActionTypes.UpdateAppStates;

  constructor(public payload: { appStates: Update<AppsStateModel>[] }) {}
}

export class DeleteAppState implements Action {
  readonly type = AppStateActionTypes.DeleteAppState;

  constructor(public payload: { id: string }) {}
}

export class DeleteAppStates implements Action {
  readonly type = AppStateActionTypes.DeleteAppStates;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearAppStates implements Action {
  readonly type = AppStateActionTypes.ClearAppStates;
}

export type AppStateActions =
 LoadAppStates
 | AddAppState
 | UpsertAppState
 | AddAppStates
 | UpsertAppStates
 | UpdateAppState
 | UpdateAppStates
 | DeleteAppState
 | DeleteAppStates
 | ClearAppStates;
