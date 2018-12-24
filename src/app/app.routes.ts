import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {AppDisplayPageComponent} from './pages/app-display-page/app-display-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'apps',
    pathMatch: 'full'
  },
  {
    path: 'apps',
    component: HomeComponent
  },
  {
    path: 'apps/view/:appId',
    component: AppDisplayPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class RoutingModule {}
