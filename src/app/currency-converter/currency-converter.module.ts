import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyConverterPageRoutingModule } from './currency-converter-routing.module';

import { CurrencyConverterPage } from './currency-converter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyConverterPageRoutingModule
  ],
  declarations: [CurrencyConverterPage]
})
export class CurrencyConverterPageModule {}
