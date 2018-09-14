import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sitename = 'conduit';
  subtitle = 'A place to share your knowledge.';
  data: Article[];
  constructor(private datasvc: DataService) { }
  ngOnInit(): void {
    this.datasvc.getArticle().subscribe(v => {
      this.data = v;
    })
  }
  searchArticle(keyword: string) {
    this.datasvc.getArticle(keyword).subscribe(v => {
      this.data = v;
    });
  }
}
