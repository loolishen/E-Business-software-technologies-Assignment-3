import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  constructor(private http: HttpClient) {}

  addEvent(): void {
    const eventId = this.generateEventID();
    const requestBody = {
      // Populate your request body here based on your requirements
      name: 'Event Name',
      descriptionE: 'Event Description',
      startDateTime: '2023-10-14T12:00:00', // Sample date and time
      durationInMinutes: 120, // Sample duration
      isActive: true,
      image: 'event-image-url',
      capacity: 100,
      ticketsAvailable: 100
    };

    this.http.post<any>('http://localhost:8080/33349800/api/v1/addEvent', requestBody)
      .subscribe(
        response => {
          console.log('Event added successfully with ID:', eventId);
        },
        error => {
          console.error('Error adding the event:', error);
        }
      );
  }

  private generateEventID(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'E';

    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    result += '-';

    for (let i = 0; i < 4; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      result += randomDigit;
    }

    return result;
  }
}
