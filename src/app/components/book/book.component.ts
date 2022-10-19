import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { isbnBook } from 'src/app/models/singleBook.model';
import { HttpCallsService } from 'src/app/services/httpCalls.service';
import { Params } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public isbn13!: string;
  public book$!: Observable<isbnBook>;

  constructor(
    private httpCallsService: HttpCallsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.isbn13 = param['id'];
      console.log(this.isbn13);
    })

   this.book$ = this.httpCallsService.getBook(this.isbn13);
  }

}
