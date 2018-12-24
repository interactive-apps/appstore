import {ItemCardLoaderComponent} from './item-card-loader/item-card-loader.component';
import {ProgressiveLoaderComponent} from './progressive-loader/progressive-loader.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {AppItemLoaderComponent} from './app-item-loader/app-item-loader.component';


export const sharedLoaders: any[] = [
  ItemCardLoaderComponent, ProgressiveLoaderComponent,
  ProgressBarComponent, AppItemLoaderComponent];

export * from './item-card-loader/item-card-loader.component';
