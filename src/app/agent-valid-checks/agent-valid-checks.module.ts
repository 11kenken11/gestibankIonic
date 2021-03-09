import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentValidChecksPageRoutingModule } from './agent-valid-checks-routing.module';

import { AgentValidChecksPage } from './agent-valid-checks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentValidChecksPageRoutingModule
  ],
  declarations: [AgentValidChecksPage]
})
export class AgentValidChecksPageModule {}
