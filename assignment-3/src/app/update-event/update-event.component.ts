import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  eventId: string = '';
  name: string = '';
  description: string = '';
  startDateTime: string = '';
  durationInMinutes: number = 0;
  isActive: boolean = false;
  image: string = '';
  capacity: number = 0;
  ticketsAvailable: number = 0;
  

  constructor(private http: HttpClient) {}

  updateEvent(): void {
    const requestBody = {
      eventId: this.eventId,
      name: this.name,
      description: this.description,
      startDateTime: this.startDateTime,
      durationInMinutes: this.durationInMinutes,
      isActive: this.isActive,
      image: this.image,
      capacity: this.capacity,
      ticketsAvailable: this.ticketsAvailable
    };

    this.http.post<any>('http://localhost:8080/33349800/api/v1/updateEventById', requestBody)
      .subscribe(
        response => {
          if (response.status === 'Event not found') {
            console.error('Event not found');
          } else {
            console.log('Event updated successfully');
          }
        },
        error => {
          console.error('Error updating the event:', error);
        }
      );
  }
}
