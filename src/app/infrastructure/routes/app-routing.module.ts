import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const APPLICATION_ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(APPLICATION_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
