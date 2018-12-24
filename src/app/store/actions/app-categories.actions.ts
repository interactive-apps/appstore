import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { AppCategories } from '../models/app-categories.model';

export enum AppCategoriesActionTypes {
  LoadAppCategoriess = '[AppCategories] Load AppCategoriess',
  AddAppCategories = '[AppCategories] Add AppCategories',
  UpsertAppCategories = '[AppCategories] Upsert AppCategories',
  AddAppCategoriess = '[AppCategories] Add AppCategoriess',
  UpsertAppCategoriess = '[AppCategories] Upsert AppCategoriess',
  UpdateAppCategories = '[AppCategories] Update AppCategories',
  UpdateAppCategoriess = '[AppCategories] Update AppCategoriess',
  DeleteAppCategories = '[AppCategories] Delete AppCategories',
  DeleteAppCategoriess = '[AppCategories] Delete AppCategoriess',
  ClearAppCategoriess = '[AppCategories] Clear AppCategoriess'
}

export class LoadAppCategoriess implements Action {
  readonly type = AppCategoriesActionTypes.LoadAppCategoriess;

  constructor(public payload: { appCategoriess: AppCategories[] }) {}
}

export class AddAppCategories implements Action {
  readonly type = AppCategoriesActionTypes.AddAppCategories;

  constructor(public payload: any) {}
}

export class UpsertAppCategories implements Action {
  readonly type = AppCategoriesActionTypes.UpsertAppCategories;

  constructor(public payload: { appCategories: AppCategories }) {}
}

export class AddAppCategoriess implements Action {
  readonly type = AppCategoriesActionTypes.AddAppCategoriess;

  constructor(public payload: { appCategoriess: AppCategories[] }) {}
}

export class UpsertAppCategoriess implements Action {
  readonly type = AppCategoriesActionTypes.UpsertAppCategoriess;

  constructor(public payload: { appCategoriess: AppCategories[] }) {}
}

export class UpdateAppCategories implements Action {
  readonly type = AppCategoriesActionTypes.UpdateAppCategories;

  constructor(public payload: any) {}
}

export class UpdateAppCategoriess implements Action {
  readonly type = AppCategoriesActionTypes.UpdateAppCategoriess;

  constructor(public payload: { appCategoriess: Update<AppCategories>[] }) {}
}

export class DeleteAppCategories implements Action {
  readonly type = AppCategoriesActionTypes.DeleteAppCategories;

  constructor(public payload: { id: string }) {}
}

export class DeleteAppCategoriess implements Action {
  readonly type = AppCategoriesActionTypes.DeleteAppCategoriess;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearAppCategoriess implements Action {
  readonly type = AppCategoriesActionTypes.ClearAppCategoriess;
}

export type AppCategoriesActions =
 LoadAppCategoriess
 | AddAppCategories
 | UpsertAppCategories
 | AddAppCategoriess
 | UpsertAppCategoriess
 | UpdateAppCategories
 | UpdateAppCategoriess
 | DeleteAppCategories
 | DeleteAppCategoriess
 | ClearAppCategoriess;
