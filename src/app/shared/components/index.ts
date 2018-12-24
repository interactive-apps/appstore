import {AppItemHolderComponent} from './app-item-holder/app-item-holder.component';
import {AppItemListHolderComponent} from './app-item-list-holder/app-item-list-holder.component';
import {CarouseItemComponent} from './carouse-item/carouse-item.component';

export const sharedComponents: any[] = [
  AppItemHolderComponent, CarouseItemComponent,
  AppItemListHolderComponent
];

export * from './app-item-holder/app-item-holder.component';
export * from './app-item-list-holder/app-item-list-holder.component';
export * from './carouse-item/carouse-item.component';
