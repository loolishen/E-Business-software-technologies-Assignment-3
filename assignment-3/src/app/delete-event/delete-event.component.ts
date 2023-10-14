import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent {
  eventId: string = '';

  constructor(private http: HttpClient) {}

  deleteEvent(): void {
    const requestBody = { eventId: this.eventId };

    this.http.post<any>('http://localhost:8080/33349800/api/v1/deleteEventById', requestBody)
      .subscribe(
        response => {
          if (response.acknowledged) {
            console.log('Event deleted successfully');
          } else {
            console.error('Event not found');
          }
        },
        error => {
          console.error('Error deleting the event:', error);
        }
      );
  }
}
