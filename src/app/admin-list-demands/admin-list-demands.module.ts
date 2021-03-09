import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListDemandsPageRoutingModule } from './admin-list-demands-routing.module';

import { AdminListDemandsPage } from './admin-list-demands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListDemandsPageRoutingModule
  ],
  declarations: [AdminListDemandsPage]
})
export class AdminListDemandsPageModule {}
