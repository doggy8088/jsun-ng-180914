import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword;

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  doSearch(value) {
    console.log(value);
    this.search.emit(value);
  }

}
