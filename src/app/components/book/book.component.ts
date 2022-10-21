import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isbnBook } from 'src/app/models/singleBook.model';
import { HttpCallsService } from 'src/app/services/httpCalls.service';
import { Params } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public isbn13!: string;
  public book$!: Observable<isbnBook>;
  public addedToCart = false;

  constructor(
    private httpCallsService: HttpCallsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.isbn13 = param['id'];
      console.log(this.isbn13);
    })

   this.book$ = this.httpCallsService.getBook(this.isbn13);
  }

  public addToCart(book: isbnBook){
    console.log(book);
    this.cartService.addToCart(book);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {relativeTo: this.route})
  }
}
