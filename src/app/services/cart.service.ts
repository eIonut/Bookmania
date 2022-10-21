import { Injectable } from '@angular/core';
import { isbnBook } from '../models/singleBook.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItems: isbnBook[] = [];
constructor() { }

public addToCart(book: isbnBook){
  this.cartItems.push(book);
  localStorage.setItem('cart', JSON.stringify(this.cartItems));
}

public getCartItems() {
  this.cartItems = JSON.parse(localStorage.getItem('cart') as string);
  return this.cartItems;
}

public emptyCart() {
  this.cartItems = [];
}

public setCart(cart: any) {
  this.cartItems = cart;
}
}
