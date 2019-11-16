import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  getData(){
    return this.http.get("http://localhost:4000/employees");
  }

  addData(emp:any){
    return this.http.post("http://localhost:4000/employees",emp);
  }

  
  delete(no:any)
  {
    return this.http.delete("http://localhost:4000/employees/"+no);
  }
}
