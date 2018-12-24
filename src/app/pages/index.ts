import {HomeComponent} from './home/home.component';
import {AppDisplayPageComponent} from './app-display-page/app-display-page.component';
import {AppReleasePageComponent} from './app-release-page/app-release-page.component';
import {AppDescriptionPageComponent} from './app-description-page/app-description-page.component';

export const appsPagesComponents: any[] = [
  HomeComponent, AppDisplayPageComponent,
  AppDescriptionPageComponent, AppReleasePageComponent
];

export * from './home/home.component';
