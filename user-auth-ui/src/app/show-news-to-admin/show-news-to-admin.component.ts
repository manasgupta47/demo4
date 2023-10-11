import { Component } from '@angular/core';
import { News } from '../_model/news.model';
import { NewsService } from '../_services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowNewsImageComponent } from '../show-news-image/show-news-image.component';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common'
@Component({
  selector: 'app-show-news-to-admin',
  templateUrl: './show-news-to-admin.component.html',
  styleUrls: ['./show-news-to-admin.component.css']
})
export class ShowNewsToAdminComponent {
  showLoadMoreProductButton = false;
  pageNumber:number=0;
  showTable=false;
  newsDetails:News[]=[];
  displayedColumns: string[] = ['Id', 'News Title', 'News Description', 'News Content','News Published Date','Actions'];
  ngOnInit():void{
    this.showNews();
  }
  constructor(private location: Location,private router:Router,private newsService: NewsService,private _snackBar: MatSnackBar,public dialog: MatDialog){}
  public showNews(searchKeyword: string = ""){
    this.showTable=false;
  this.newsService.showNews(this.pageNumber,searchKeyword).subscribe(
    (resp:any)=>{
      console.log(resp);
      resp.content.forEach((n: News) => this.newsDetails.push(n));
      this.showTable = true;
      if(resp.content.length == 8) {
        this.showLoadMoreProductButton = true;
      } else {
        this.showLoadMoreProductButton = false;
      }
    },
    (error:HttpErrorResponse)=>{
  console.log(error);
    }
  )
  }
  back(){
    this.location.back();
  }
  public deleteNews(newsId:string){
    this.newsService.deleteNews(newsId).subscribe(
      (resp)=>{
        console.log(resp);
        this.showNews();
        this.openSnackBar('News Deleted Successfully', 'Dismiss');
this.refresh()
      },
      (error:HttpErrorResponse)=>{
    console.log(error);
    this.openSnackBar('Something Went Wrong!!', 'Dismiss');
      }
    )
  }
  refresh(): void {
    window.location.reload();
}
  searchByKeyword(searchkeyword: any){
    console.log(searchkeyword);
    this.pageNumber = 0;
    this.newsDetails = [];
    this.showNews(searchkeyword);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
  showImage(news: any){
    let dialogRef= this.dialog.open(ShowNewsImageComponent,{
       height: '400px',
       width: '600px',
     }
     )
     dialogRef.componentInstance.newsId =news.newsId;
   }
   editNews(newsId: any){
    this.router.navigate(['/updateNewsDetails',newsId])
  }
  loadMoreNews(){
    this.pageNumber = this.pageNumber + 1;
    this.showNews();
  }
  }
  
