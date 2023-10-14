import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.css']
})
export class DisplayEventComponent implements OnInit {
  event: any; // Store the event details here

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const eventId = params['id']; // Assuming 'id' is the route parameter for event ID
      this.getEventDetails(eventId);
    });
  }

  getEventDetails(eventId: string): void {
    this.http.get<any>(`http://localhost:8080/33349800/api/v1/getEventById/${eventId}`)
      .subscribe(
        (event) => {
          this.event = event;
        },
        (error) => {
          console.error('Error fetching event details:', error);
        }
      );
  }
}
