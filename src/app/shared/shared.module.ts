import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {sharedComponents} from './components';
import {sharedLoaders} from './loaders';
import {NgPipesModule} from 'ngx-pipes';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgPipesModule,
  ],
  declarations: [...sharedComponents, ...sharedLoaders],
  exports: [...sharedComponents, ...sharedLoaders],
})
export class SharedModule { }
