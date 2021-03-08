import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ExchangeRate from '../models/ExchangeRate';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private url = 'https://api.exchangeratesapi.io/latest/';

  constructor(private httpClient: HttpClient) { }

  getRates() {
  
    return new Promise(
      (resolve, reject) => {
        this.httpClient.get(this.url).toPromise().then(
          (data) => { 
            resolve(data.valueOf());
            console.log('currencies get');
            console.log(data.valueOf());

          }, (error) => {
            reject(error);
          }
        );
      }
    );
   }
}
