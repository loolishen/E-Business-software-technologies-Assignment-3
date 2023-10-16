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
  event: any; // Add an event property to store event details

  constructor(private router: Router, private http: HttpClient) {}

  // Define the function to fetch event details based on the eventId
  fetchEventDetails(eventId: string): void {
    // Make an HTTP GET request to fetch event details based on the eventId
    this.http.get<any>(`http://localhost:8080/lishen/event/details/${eventId}`)
      .subscribe(
        (event) => {
          this.event = event;
        },
        (error) => {
          console.error('Error fetching event details:', error);
        }
      );
  }

  deleteEvent(): void {
    // Get the eventId from the input field
    const eventId = this.eventId;

    // Call the function to fetch event details
    this.fetchEventDetails(eventId);

    // Perform the event deletion after fetching details
    this.http.post<any>('http://localhost:8080/lishen/event/remove', { eventId })
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
