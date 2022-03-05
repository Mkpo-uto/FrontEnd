import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employees-component/employees-component.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(
    private http: HttpClient
  ) { }

  employees(Id : number){
     return this.http.get<Employee[]>(`http://localhost:8080/connectId/${Id}/employees`)
  }
}
