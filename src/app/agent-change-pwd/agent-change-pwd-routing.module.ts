import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentChangePwdPage } from './agent-change-pwd.page';

const routes: Routes = [
  {
    path: '',
    component: AgentChangePwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentChangePwdPageRoutingModule {}
