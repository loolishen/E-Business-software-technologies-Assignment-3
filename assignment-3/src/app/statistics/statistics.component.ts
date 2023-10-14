import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  statistics: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make an HTTP request to fetch statistics
    this.http.get('/api/statistics').subscribe((data) => {
      this.statistics = data;
    });
  }
}
