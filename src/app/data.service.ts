import { Injectable } from '@angular/core';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getArticle(keyword: string = '') {
    let q = ((keyword) ? '?q='+keyword : '');
    return this.http.get<Article[]>('http://localhost:3000/articles' + q);
  }

  getTags() {
    return this.http.get<string[]>('http://localhost:3000/tags');
  }
}
