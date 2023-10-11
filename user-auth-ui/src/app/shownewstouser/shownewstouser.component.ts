import { Component } from '@angular/core';
import { News } from '../_model/news.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NewsService } from '../_services/news.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-shownewstouser',
  templateUrl: './shownewstouser.component.html',
  styleUrls: ['./shownewstouser.component.css']
})
export class ShownewstouserComponent {
  newsDetails:News[]=[];
  pageNumber:number =0;
  showLoadButton = false;
  constructor(private location : Location,private newsService: NewsService,private router:Router){
    
  }
  ngOnInit():void{
    this.showNews()
  }
  searchByKeyword(searchkeyword: any) {
    console.log(searchkeyword);
    this.pageNumber = 0;
    this.newsDetails = [];
   this.showNews(searchkeyword)
  }
  back(){
    this.location.back()
  }
  public showNews(searchKey:string=""){
    this.newsService.showNews(this.pageNumber,searchKey).subscribe(
      (resp:any)=>{
        console.log(resp);
        if(resp.content.length == 8) {
          this.showLoadButton = true;
        } else {
          this.showLoadButton = false;
        }
        resp.content.forEach((n: News) => this.newsDetails.push(n));
      },
      (error:HttpErrorResponse)=>{
    console.log(error);
      }
    )
    }
    showNewsDetails(newsId: any){
      this.router.navigate(['/newsViewDetails',{newsId}])
     
      
    }
    public loadMoreNews() {
      this.pageNumber = this.pageNumber + 1;
      this.showNews();
    }
}
