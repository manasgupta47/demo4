import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../_model/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}
  public addNews(news: any) {
    return this.httpClient.post<News>(
      'http://localhost:8084/news/addNewNews',
      news
    );
  }
  public showNews(pageNumber: any,searchkeyword:string="") {
    return this.httpClient.get<any>('http://localhost:8084/news/getAllNews?pageNumber=' + pageNumber+"&searchKey="+searchkeyword);
  }
  public deleteNews(newsId: string) {
    return this.httpClient.delete('http://localhost:8084/news/' + newsId);
  }
  public getNewsById(newsId: any): Observable<News> {
    return this.httpClient.get<News>('http://localhost:8084/news/' + newsId);
  }
  public updateNewsById(newsId: string, news: any) {
    return this.httpClient.put<News>(
      'http://localhost:8084/news/' + newsId,
      news
    );
  }
}
