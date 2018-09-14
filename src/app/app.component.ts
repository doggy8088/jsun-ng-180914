import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sitename = 'conduit';
  subtitle = 'A place to share your knowledge.';
  data: Article[];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<Article[]>('http://localhost:3000/articles').subscribe(v => {
      this.data = v;
    });
  }
  searchArticle(keyword: string) {
    this.http.get<Article[]>('http://localhost:3000/articles?q=' + keyword).subscribe(v => {
      this.data = v;
    });
  }
}
