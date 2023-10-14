import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  eventData: any = {
    name: '',
    descriptionE: '',
    startDateTime: '',
    durationInMinutes: 0,
    isActive: false,
    image: '',
    capacity: 0,
    ticketsAvailable: 0
  };
  error: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  addEvent(): void {
    // Make the HTTP POST request to add an event
    this.http.post<any>('http://localhost:8080/33349800/api/v1/addEvent', this.eventData)
      .subscribe(
        response => {
          if (response.eventId) {
            this.router.navigate(['/list-events']);
            console.log('Event added successfully');
          } else {
            this.error = 'Failed to add the event';
          }
        },
        error => {
          console.error('Error adding the event:', error);
          this.error = 'An error occurred. Please try again.';
        }
      );
  }
}
