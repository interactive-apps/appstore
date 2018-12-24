import {AppItemHolderComponent} from './app-item-holder/app-item-holder.component';
import {AppItemListHolderComponent} from './app-item-list-holder/app-item-list-holder.component';
import {CarouseItemComponent} from './carouse-item/carouse-item.component';
import {CarouseItemFeaturesComponent} from './carouse-item-features/carouse-item-features.component';

export const sharedComponents: any[] = [
  AppItemHolderComponent, CarouseItemComponent,
  AppItemListHolderComponent, CarouseItemFeaturesComponent
];

export * from './app-item-holder/app-item-holder.component';
export * from './app-item-list-holder/app-item-list-holder.component';
export * from './carouse-item/carouse-item.component';
export * from './carouse-item-features/carouse-item-features.component';
