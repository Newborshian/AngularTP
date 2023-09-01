import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Article } from '../article.model';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
 
  @Input()
  public article!: Article;
  
  @Output()
  articleDeleted : EventEmitter<boolean> = new EventEmitter();

  @Output()
  changingVotes: EventEmitter<boolean> = new EventEmitter();

  constructor(private serviceArticle : HttpserviceService){ }


  deleteArticle(id: number){
    this.serviceArticle.deleteArticle(id).subscribe(res =>{
      this.articleDeleted.emit(true);
    });
   
  }

  voteUp() {
    this.article.votes++;
    this.changingVotes.emit(true);
  }

  
  voteDown() {
    this.article.votes--;
    this.changingVotes.emit(true);
  }

}