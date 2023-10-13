import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const HttpOptions = {
  headers : new HttpHeaders({"Content-type" : "application/json"})
}
@Injectable({
  providedIn: 'root'
})
export class DatabaseServicesService {

  constructor(private http : HttpClient) {}
  addCategory(aCategory : any){
    return this.http.post("/input",aCategory,HttpOptions);
  }
  getCategory(){
    return this.http.get("/output")
  }
}
