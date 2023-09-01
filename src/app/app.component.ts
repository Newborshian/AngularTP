import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';
import { HttpserviceService } from './httpservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Tp02';
  public articles: Article[] | null = null;
  formArticle = this.fb.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    link: ['', Validators.required]
  }) 

  constructor(private serviceArticle: HttpserviceService, private fb: FormBuilder){ }

  ngOnInit(): void {
    this.serviceArticle.getAllArticles();
    this.serviceArticle.articles$.subscribe((res) => {
      this.articles = res;
    })
    this.sortedArticles();
  }

  articleDeleted(event: boolean){
    if(event){
      this.ngOnInit();
    }
  }

  postArticle(formArticle: FormGroup){
    this.serviceArticle.postArticle(formArticle.value).subscribe((res) => {
        this.ngOnInit()
      });  
  }

  sortedArticles(){
    this.articles!.sort((a: Article, b: Article) => b.votes - a.votes)
  }

}  
