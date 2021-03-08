import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import ExchangeRate from '../models/ExchangeRate';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.page.html',
  styleUrls: ['./currency-converter.page.scss'],
})
export class CurrencyConverterPage implements OnInit {
  //rates: Map<string, number>;
  exchanges: ExchangeRate;
  devises;
  result;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.exchanges = new ExchangeRate('a', 'a', null);
    this.currencyService.getRates().then(
      (exchangeRate: ExchangeRate) => {
        this.exchanges = exchangeRate;
        this.devises = Object.keys(this.exchanges.rates);
  },
    (error) => {
      console.log("erreur: " +error);
    }
    )

  }

  convert(form) {
    this.result = form.value.montant * this.exchanges.rates[form.value.devise];
    console.log("TEST" + this.result);
  }
}
