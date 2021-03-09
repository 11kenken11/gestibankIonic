import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentValidClientDemandsPage } from './agent-valid-client-demands.page';

const routes: Routes = [
  {
    path: '',
    component: AgentValidClientDemandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentValidClientDemandsPageRoutingModule {}
