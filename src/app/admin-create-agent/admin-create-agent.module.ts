import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCreateAgentPageRoutingModule } from './admin-create-agent-routing.module';

import { AdminCreateAgentPage } from './admin-create-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCreateAgentPageRoutingModule
  ],
  declarations: [AdminCreateAgentPage]
})
export class AdminCreateAgentPageModule {}
