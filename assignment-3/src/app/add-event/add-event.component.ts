import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  constructor(private router: Router, private http: HttpClient) {}

  addEvent(): void {
    const eventId = this.generateEventID();
    const requestBody = {
      name: 'Event Name',
      descriptionE: 'Event Description',
      startDateTime: '2023-10-14T12:00:00',
      durationInMinutes: 120,
      isActive: true,
      image: 'event-image-url',
      capacity: 100,
      ticketsAvailable: 100
    };

    this.http.post<any>('http://localhost:8080/lishen/event/add', requestBody)
      .subscribe(
        response => {
          if (response.acknowledged) {
          this.router.navigate(['/list-events']);
            console.log('Event added successfully');
          } 
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
