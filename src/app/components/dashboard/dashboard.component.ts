import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from 'src/app/services/httpCalls.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public searching = this.httpCallsService.getSearch();
  public books$!: Observable<Book>;
  constructor(private httpCallsService: HttpCallsService,
              private router: Router
    ) { }

  ngOnInit() {
    if(!this.searching) {
      this.books$ = this.httpCallsService.getDashboardBooks();
    }

    else {
      this.books$ = this.httpCallsService.searchBook('mongo');
    }
  }

  public navigateToBook(isbn13: string | undefined) {
    this.router.navigate(['/book', isbn13]);
  }

}
