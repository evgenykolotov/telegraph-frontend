import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { APPLICATION_ROUTES } from './app/infrastructure/routes/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom([
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot(),
    NgxsActionsExecutingModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    RouterModule.forRoot(APPLICATION_ROUTES),
  ])],
}).catch(err => console.error(err));
