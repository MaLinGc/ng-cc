import { Component, OnInit } from '@angular/core';
import { BuyStock } from "./price-quote/price-quote.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  buyStock: BuyStock = new BuyStock("",0,0);

  ngOnInit(): void {
  }

  buyHandler(event: BuyStock) {
    this.buyStock = event;
  }
}
