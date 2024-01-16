import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-rate.component.html',
  styleUrl: './products-rate.component.css'
})
export class ProductsRateComponent implements OnInit{
  @Input() rateInit: number = 0;

  ratePr: number = 0;

  rates: number[] = [1, 2, 3, 4, 5];

  constructor() {}
  ngOnInit(): void {
    this.ratePr = Math.round(this.rateInit);
  }

}
