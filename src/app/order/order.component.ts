import { Component, Input, OnInit } from '@angular/core';
import { BuyStock } from "../price-quote/price-quote.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  buyStock: BuyStock;

  constructor() {
  }

  ngOnInit() {
  }

}
