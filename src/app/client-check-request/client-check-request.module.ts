import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientCheckRequestPageRoutingModule } from './client-check-request-routing.module';

import { ClientCheckRequestPage } from './client-check-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientCheckRequestPageRoutingModule
  ],
  declarations: [ClientCheckRequestPage]
})
export class ClientCheckRequestPageModule {}
