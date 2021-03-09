import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentChangePwdPageRoutingModule } from './agent-change-pwd-routing.module';

import { AgentChangePwdPage } from './agent-change-pwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentChangePwdPageRoutingModule
  ],
  declarations: [AgentChangePwdPage]
})
export class AgentChangePwdPageModule {}
