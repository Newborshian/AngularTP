import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  public articles$: BehaviorSubject<Article[] | null> = new BehaviorSubject<Article[] | null>(null);

  constructor(private http: HttpClient) { }

  async getAllArticles(): Promise<void> {
    this.http.get<Article[]>('http://localhost:3000/posts/').subscribe((res) => {
      this.articles$.next(res as Article[]);
    });
  }

  deleteArticle(id: number){
    return this.http.delete('http://localhost:3000/posts/' + id)
  }

  postArticle(article : Article) {
    return this.http.post('http://localhost:3000/posts/', article);
  }
}
