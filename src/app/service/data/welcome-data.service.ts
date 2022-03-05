import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class Employee{

  constructor(
    public Id: number,
    public FirstName: string,
    public LastName: string,
    public JobTitle: string,
    public ReportsTo: string,
    public VisaStatus: string,
    public VisaExpiry: string,
    public Nationality: string,
    public Project: string,
    public AgileScrum: string
  ){

    
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(

    private http: HttpClient    
  ) { }

  executeShipRESTService(){
    //console.log('time to add REST microservices')
    return this.http.get<Employee[]>('http://localhost:8080/connectId/1/employees')
  }
}
