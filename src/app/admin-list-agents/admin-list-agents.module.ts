import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListAgentsPageRoutingModule } from './admin-list-agents-routing.module';

import { AdminListAgentsPage } from './admin-list-agents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListAgentsPageRoutingModule
  ],
  declarations: [AdminListAgentsPage]
})
export class AdminListAgentsPageModule {}
