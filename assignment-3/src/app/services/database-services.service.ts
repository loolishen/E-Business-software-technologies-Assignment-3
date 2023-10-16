import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
}
@Injectable({
  providedIn: 'root'
})
export class DatabaseServicesService {

  constructor(private http: HttpClient) { }

  getEventCat() {
    return this.http.get("/33349800/api/v1/list-eventCat");
  }

  addEventCat(anEvent: any) {
    return this.http.post("/33349800/api/v1/createEventCategory", anEvent, httpOptions);
  }

  deleteEventCat(catID: string) {
    return this.http.delete(`/33349800/api/v1/delete-eventCat/${catID}`, httpOptions);
  }

  updateEventCat(CategoryDB: any) {
    return this.http.put(`/33349800/api/v1/update-eventCat/${CategoryDB.id}/${CategoryDB.name}/${CategoryDB.description}`, CategoryDB, httpOptions);
  }

  displayEventCat(catID: any) {
    return this.http.get(`/33349800/api/v1/list-eventCat/${catID}`, httpOptions);
  }

  OperationCount() {
    return this.http.get("/33349800/api/v1/stats-g1");
  }
}
