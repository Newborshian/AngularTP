import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private service1 : HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.service1.get<Article[]>('http://localhost:3000/posts/');
  }

  deleteArticle(id : string): Observable<Article>{
    return this.service1.delete<Article>('http://localhost:3000/posts/' + id)
  }
}
