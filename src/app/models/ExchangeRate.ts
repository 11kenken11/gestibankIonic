export default class ExchangeRate {
    base: string;
    date: string;
    //rates: { [key: string]: number; };
    rates: Record<string, number>;
    /*constructor(base: string, date: string, rates: { [key: string]: number; }) {
        this.base = base;
        this.date = date;
        this.rates = rates;
    }*/
    constructor(base: string, date: string, rates: Record<string, number>) {
        this.base = base;
        this.date = date;
        this.rates = rates;
    }
}