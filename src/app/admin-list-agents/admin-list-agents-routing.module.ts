import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListAgentsPage } from './admin-list-agents.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListAgentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListAgentsPageRoutingModule {}
