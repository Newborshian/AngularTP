import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from './article.model';
import { HttpserviceService } from './httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Tp02';
  articles!: Article[];
  
  addArticle(id: HTMLInputElement, title: HTMLInputElement, link: HTMLInputElement){
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(id.value, title.value, link.value, 0));
    return false;
  }

  constructor(private serviceArticle: HttpserviceService){
  }

  articleDeleted(event : boolean){
    if(event){
      this.ngOnInit();
    }
  }
  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }

  ngOnInit(): void {
       this.serviceArticle.getArticles().subscribe(restArticles => this.articles = restArticles)
       this.sortedArticles();
  }

  ngOnDestroy(): void {
      
  }
}  
