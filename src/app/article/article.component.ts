import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Article } from '../article.model';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
 
  @Input()
  public article!: Article;
  
  @Output()
  articleDeleted : EventEmitter<boolean> = new EventEmitter();

  constructor(private serviceArticle : HttpserviceService){ }

  ngOnInit(): void {
      
  }

  deleteArticle(id: number){
    console.log(id);
    this.serviceArticle.deleteArticle(id).subscribe(res =>{
      this.articleDeleted.emit(true);
    });
   
  }
  voteUp() {
    this.article.votes++;
    console.log(this.article);
    
  }

  
  voteDown() {
      this.article.votes--;
  }

}