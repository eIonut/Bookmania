import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isbnBook } from 'src/app/models/singleBook.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public productNumber = 0;
  public openCart = false;
  public cartItems: isbnBook[] = [];
  public total = 0;

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCartItems();
  }


  public getCartItems() {
    this.cartItems = this.cartService.getCartItems();
    let prices = this.cartItems.map(item => item.price);
    let itemPrices = prices.map(item => Number(item.slice(1)));
    itemPrices.forEach(item => this.total = this.total + item);
    localStorage.setItem('total', JSON.stringify(this.total));
    this.productNumber = this.cartItems.length;

  }

  public showCartItems() {
    this.openCart = !this.openCart;
  }

  public deleteFromCart(item: isbnBook, index: number){
      this.cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], {relativeTo: this.route})
  }

}
