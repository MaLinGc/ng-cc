import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  priceQuote: PriceQuote = new PriceQuote("IBM", 0);

  inputAmount: FormControl = new FormControl();

  amount: number = 0;

  @Output()
  buy: EventEmitter<BuyStock> = new EventEmitter();

  constructor() {
    setInterval(() => {
      this.priceQuote = new PriceQuote("IBM", 100 * Math.random());
    }, 1000);

  }

  ngOnInit() {
    this.inputAmount.valueChanges
      .subscribe(amount => this.amount = amount);
  }

  buyStock(event: any) {
    let buyStock: BuyStock = new BuyStock(this.priceQuote.stockCode, this.priceQuote.lastPrice, this.amount);
    this.buy.emit(buyStock);
  }

}

export class PriceQuote {

  constructor(public stockCode: string,
              public lastPrice: number) {

  }
}

export class BuyStock {
  constructor(public stockCode: string,
              public price: number,
              public amount: number) {

  }
}
