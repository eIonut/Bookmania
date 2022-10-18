import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

constructor(private http: HttpClient) { }

public getDashboardBooks(): Observable<any> {
  return this.http.get<Book>('https://api.itbook.store/1.0/search/java');
}
}
