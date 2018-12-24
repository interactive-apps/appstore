import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';
import {appsPagesComponents} from './pages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgPipesModule} from 'ngx-pipes';
import {RoutingModule} from './app.routes';
import {SharedModule} from './shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, ...appsPagesComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RoutingModule,
    BrowserAnimationsModule,
    NgPipesModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
