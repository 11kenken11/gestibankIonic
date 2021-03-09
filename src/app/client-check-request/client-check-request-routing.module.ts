import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientCheckRequestPage } from './client-check-request.page';

const routes: Routes = [
  {
    path: '',
    component: ClientCheckRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientCheckRequestPageRoutingModule {}
