import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/infrastructure/routes/app-routing.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom([
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsActionsExecutingModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ])],
}).catch(err => console.error(err));
