import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent {
  eventId: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  deleteEvent(): void {
    const requestBody = { eventId: this.eventId };

    this.http.post<any>('http://localhost:8080/33349800/api/v1/deleteEventById', requestBody)
      .subscribe(
        response => {
          if (response.acknowledged) {
            // The request was successful, and the event was deleted
            console.log('Event deleted successfully');
            this.router.navigate(['/']);
          } else {
            // The request was successful, but the event was not found or not deleted
            console.error('Event deletion failed. Event not found or not deleted.');
          }
        },
        error => {
          // An error occurred during the HTTP request
          console.error('Error deleting the event:', error);
        }
      );
  }
}
