import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCreateAgentPage } from './admin-create-agent.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCreateAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCreateAgentPageRoutingModule {}
