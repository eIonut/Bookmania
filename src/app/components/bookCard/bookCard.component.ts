import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookCard',
  templateUrl: './bookCard.component.html',
  styleUrls: ['./bookCard.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() title: string | undefined = '';
  @Input() price!: string | undefined;
  @Input() image!: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
