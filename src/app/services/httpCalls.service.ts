import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { isbnBook } from '../models/singleBook.model';
@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {
public searching = false;
public searchQuery!: string;
constructor(private http: HttpClient) { }

public getDashboardBooks(): Observable<any> {
  return this.http.get<Book>('https://api.itbook.store/1.0/search/java');
}

public getBook(isbn13: string | undefined): Observable<any> {
  return this.http.get<isbnBook>(`https://api.itbook.store/1.0/books/${isbn13}`);
}

public searchBook(search: string): Observable<any> {
  this.searching = true;
  this.searchQuery = search;
  return this.http.get<isbnBook>(`https://api.itbook.store/1.0/search/${search}`);
}

public getSearch() {
  return this.searching;
}

public getSearchQuery() {
  return this.searchQuery;
}
}
