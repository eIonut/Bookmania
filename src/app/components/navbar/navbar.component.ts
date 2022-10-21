import { Component, OnInit, Input } from '@angular/core';
import { HttpCallsService } from 'src/app/services/httpCalls.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private httpCallsService: HttpCallsService) { }

  ngOnInit() {
  }

  onSubmit(input: HTMLInputElement) {
    console.log(input.value);
    this.httpCallsService.searchBook(input.value);
  }
}
