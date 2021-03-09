import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListDemandsPage } from './admin-list-demands.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListDemandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListDemandsPageRoutingModule {}
