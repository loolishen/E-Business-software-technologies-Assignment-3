import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  events: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.http.get<any[]>('http://localhost:8080/33349800/api/v1/listEvents')
      .subscribe(
        events => {
          this.events = events;
        },
        error => {
          console.error('Error fetching events:', error);
        }
      );
  }
}
