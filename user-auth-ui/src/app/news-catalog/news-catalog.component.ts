import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { News } from '../_model/news.model';
import { NewsService } from '../_services/news.service';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common'

@Component({
  selector: 'app-news-catalog',
  templateUrl: './news-catalog.component.html',
  styleUrls: ['./news-catalog.component.css'],
})
export class NewsCatalogComponent {
  minDate = new Date();
  newsForm!: FormGroup;
  newsObj: News = new News();

  constructor(
    private newsService: NewsService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private location:Location
  ) {
    this.newsForm = new FormGroup({
      newsTitle: new FormControl('', [Validators.required]),
      newsDescription: new FormControl('', [Validators.required]),
      newsContent: new FormControl('', [Validators.required]),
      newsPublishDate: new FormControl('', [Validators.required]),
      newsImage: new FormControl([], Validators.required),
    });
  }
 
  onClickSubmitForm() {
    if (!this.newsForm.invalid) {
      this.newsObj.newsTitle = this.newsForm.value.newsTitle;
      this.newsObj.newsDescription = this.newsForm.value.newsDescription;
      this.newsObj.newsContent = this.newsForm.value.newsContent;
      this.newsObj.newsPublishDate = this.newsForm.value.newsPublishDate;
      this.newsObj.newsImage = this.base64code;
      // this.productService.addProduct(this.newsObj, this.file[0]).subscribe(data =>
      this.newsService
        .addNews(this.newsObj)
        .subscribe((data) => {console.log(data)
         
        },
        (error)=>{
          console.log(error);
          this.openSnackBar('Something Went Wrong !!', 'Dismiss');
        });
        this.router.navigate(['/addNewNews']);
        window.location.reload();
        this.openSnackBar('News Added Successfully', 'Dismiss');
      
    
    } else {
      this.openSnackBar('Something Went Wrong !!', 'Dismiss');
    }
  }
  back(){
    this.location.back()
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
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
  resetData() {
    this.newsForm.reset();
  }
}
  /*
 constructor(private newsService:NewsService){}
 model={
  newsTitle: '',
  newsDescription:'',
  newsPublishDate: '',
  newsContent: '',
  newsImage: null
 };
 onFileChange(event: any) {
  const file = event.target.files[0];
  this.model.newsImage = file;
}
onSubmit() {
  const formData = new FormData();
  if (this.model.newsImage !== null){
    formData.append('newsImage', this.model.newsImage);
  }
  formData.append('newsTitle', this.model.newsTitle);
  formData.append('newsDescription', this.model.newsDescription);
  formData.append('newsPublishDate', this.model.newsPublishDate);
  formData.append('newsContent', this.model.newsContent);
this.newsService.addNews(formData).subscribe((resp)=>{
  console.log(resp);
  
})
}
}
*/
