import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-rate',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './products-rate.component.html',
  styleUrl: './products-rate.component.css'
})
export class ProductsRateComponent {
  @Input() ratePr: number = 0;
  rates: number[] = [1,2,3,4,5];

}
