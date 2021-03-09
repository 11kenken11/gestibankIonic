import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientChangePwdPage } from './client-change-pwd.page';

const routes: Routes = [
  {
    path: '',
    component: ClientChangePwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientChangePwdPageRoutingModule {}
