// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map, Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class NewsService {
//   private apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2024-07-22&sortBy=publishedAt&apiKey=';
//   private apiKey = '20496940acdb42648933dce9c9fe6542';

//   constructor(private http: HttpClient) { }

//   getNews(query: string, fromDate: string, toDate: string, country: string): Observable<any> {
//     let params = new HttpParams()
//       .set('q', query)
//       .set('from', fromDate)
//       .set('to', toDate)
//       .set('sortBy', 'publishedAt')
//       .set('apiKey', this.apiKey);

//     if (country) {
//       params = params.set('country', country);
//     }

//     return this.http.get<any>(this.apiUrl, { params });
//   }
// }

