import { Component, OnInit } from '@angular/core';
import { isbnBook } from 'src/app/models/singleBook.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartDetails',
  templateUrl: './cartDetails.component.html',
  styleUrls: ['./cartDetails.component.scss']
})
export class CartDetailsComponent implements OnInit {
  public cartItems: isbnBook[] = [];
  public total!: string;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = localStorage.getItem('total') as string;
  }

}
