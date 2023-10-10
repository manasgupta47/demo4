import { Component } from '@angular/core';
import { News } from '../_model/news.model';
import { NewsService } from '../_services/news.service';

@Component({
  selector: 'app-show-news-image',
  templateUrl: './show-news-image.component.html',
  styleUrls: ['./show-news-image.component.css']
})
export class ShowNewsImageComponent {
  image:any;
  public newsdata: News | undefined;
  newsId: string | undefined;
  constructor(private newsService: NewsService){}
  ngOnInit(): void {
    this.newsService.getNewsById(this.newsId).subscribe((data)=>{
      this.newsdata=data;
      this.image=this.newsdata.newsImage
    },(error)=>{
      console.log(error);
    })
}
}
