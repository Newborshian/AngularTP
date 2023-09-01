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
  article!: Article;
  
  @Output()
  articleDeleted : EventEmitter<boolean> = new EventEmitter();

  constructor(private serviceDeMerde : HttpserviceService){ }

  ngOnInit(): void {
      
  }
  voteUp(){
    this.article.voteUp();
    return false;
  }

  voteDown(){
    this.article.voteDown();
    return false;
  }

  deleteArticle(id: string){
    console.log(id);
    this.serviceDeMerde.deleteArticle(id);
  }


}