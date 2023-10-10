import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { News } from '../_model/news.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsService } from '../_services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-update-news-details',
  templateUrl: './update-news-details.component.html',
  styleUrls: ['./update-news-details.component.css']
})
export class UpdateNewsDetailsComponent {
  updateForm!:FormGroup
  news:any=News
  updateNews:News=new News()
  selectedFileName:string=''
  id:any;
  constructor(private _snackBar: MatSnackBar,private newsService:NewsService,private route:ActivatedRoute,private router:Router){
    this.updateForm=new FormGroup({
      newsTitle: new FormControl('',),
      newsDescription: new FormControl('',),
      newsPublishDate: new FormControl('',),
      newsContent: new FormControl('',),
      newsImage: new FormControl([],),
     })
  }
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.newsService.getNewsById(this.id).subscribe(data=>{
      this.news=data
      this.selectedFileName=this.news.newsImage
    },
    error=>{
      console.log(error);
    })
  }
  onClickSubmit(){
    if(!this.updateForm.invalid){      
      if(this.updateForm.value.newsTitle){
        this.updateNews.newsTitle=this.updateForm.value.newsTitle;
      }
      else{
        this.updateNews.newsTitle=this.news.newsTitle;
      }
      if(this.updateForm.value.newsDescription){
        this.updateNews.newsDescription=this.updateForm.value.newsDescription;
      }
      else{
        this.updateNews.newsDescription=this.news.newsDescription;
      }
      if(this.updateForm.value.newsPublishDate){
        this.updateNews.newsPublishDate=this.updateForm.value.newsPublishDate;
      }
      else{
        this.updateNews.newsPublishDate=this.news.newsPublishDate;
      }
      if(this.updateForm.value.newsContent){
        this.updateNews.newsContent=this.updateForm.value.newsContent;
      }
      else{
        this.updateNews.newsContent=this.news.newsContent;
      }
      if(this.base64code){
        this.updateNews.newsImage=this.base64code;
      
        
      }
      else{
      
        this.updateNews.newsImage=this.selectedFileName;
      }
      this.newsService.updateNewsById(this.id,this.updateNews).subscribe((data)=>{
        this.updateNews=data;
        this.openSnackBar("News Updated SuccessFully","Dismiss")
        this.router.navigate(['/showNewsToAdmin']);
      },
      (error)=>{
        console.log(error);
        
      })
    }
   
    
  }
  myImage!: Observable<any>;
base64code!: any;
onChange = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  const file: File = (target.files as FileList)[0];
  //console.log(file)
  this.convertToBase64(file);
};
convertToBase64(file: File) {
  const observable = new Observable((subscriber: Subscriber<any>) => {
    this.readFile(file, subscriber);
  });
  observable.subscribe((d) => {
    // console.log(d)
    this.myImage = d;
    this.base64code = d;
  });
}
readFile(file: File, subscriber: Subscriber<any>) {
  const filereader = new FileReader();
  filereader.readAsDataURL(file);
  filereader.onload = () => {
    subscriber.next(filereader.result);
    subscriber.complete();
  };
  filereader.onerror = () => {
    subscriber.error();
    subscriber.complete();
  };
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 3000,
    verticalPosition: 'top',
  });
}
}


