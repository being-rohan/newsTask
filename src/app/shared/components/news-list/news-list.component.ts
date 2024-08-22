import { Component, OnInit } from '@angular/core';
// import { NewsService } from '../../services/news.service';
import { News } from '../../inerface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  searchQuery = '';
  selectedCountry = '';
  fromDate: Date | null = null;
  toDate: Date | null = null;
  countries = [
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'ca', name: 'Canada' },
    { code: 'ca', name: 'Austrailia' },
    // Add more countries as needed
  ];
  articles: any[] = [];
  filteredArticles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchArticles();
  }

  fetchArticles() {
    const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-07-22&sortBy=publishedAt&apiKey=20496940acdb42648933dce9c9fe6542`;
    this.http.get(apiUrl).subscribe((response: any) => {
      
      this.articles = response.articles;
      this.filterArticles();
    });
  }

  filterArticles() {
    this.filteredArticles = this.articles.filter(article => {
      const matchesSearch = this.searchQuery ? article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
      const matchesCountry = this.selectedCountry ? article.source.country === this.selectedCountry : true;
      const matchesDateRange = (!this.fromDate || new Date(article.publishedAt) >= this.fromDate) &&
                               (!this.toDate || new Date(article.publishedAt) <= this.toDate);

      return matchesSearch && matchesCountry && matchesDateRange;
    });
  }

  viewDetails(article: any) {
    // Implement navigation to detail page with the article's ID or other identifier
    console.log('Article clicked:', article);
  }
}



