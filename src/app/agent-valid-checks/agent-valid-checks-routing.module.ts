import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentValidChecksPage } from './agent-valid-checks.page';

const routes: Routes = [
  {
    path: '',
    component: AgentValidChecksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentValidChecksPageRoutingModule {}
