import { Component } from '@angular/core';
import { News } from '../_model/news.model';
import { NewsService } from '../_services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-news-views-deatil',
  templateUrl: './news-views-deatil.component.html',
  styleUrls: ['./news-views-deatil.component.css']
})
export class NewsViewsDeatilComponent {
news :any=News;
id:any;
constructor(private newsService:NewsService,
  private location:Location,

  private route: ActivatedRoute,
  private router: Router,
  ){}
ngOnInit():void{
  this.id = this.route.snapshot.params['newsId'];
  this.newsService.getNewsById(this.id).subscribe(
    (data)=>{
      this.news=data;
      console.log(this.news);
      
    },
    (error)=>{
      console.log(error);
      
    }
  )
  
}
back(){
  this.location.back()
}
}
