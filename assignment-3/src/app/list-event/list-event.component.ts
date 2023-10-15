import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventsComponent implements OnInit {
  events: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.http.get<any[]>('http://localhost:8080/lishen/eventOngoing')
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
