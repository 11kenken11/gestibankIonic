import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientChangePwdPageRoutingModule } from './client-change-pwd-routing.module';

import { ClientChangePwdPage } from './client-change-pwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientChangePwdPageRoutingModule
  ],
  declarations: [ClientChangePwdPage]
})
export class ClientChangePwdPageModule {}
