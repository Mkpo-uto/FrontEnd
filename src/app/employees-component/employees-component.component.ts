import { Component, OnInit } from '@angular/core';

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
@Component({
  selector: 'app-employees-component',
  templateUrl: './employees-component.component.html',
  styleUrls: ['./employees-component.component.css']
})
export class EmployeesComponentComponent implements OnInit {

  employees = [
    
    new Employee(1,'Mkpo-uto', 'Edet', 'Software Engineer', 'Anna Lyashenko', 'Graduate Visa 485', '22/2/2022', 'Nigeria', 'Phantom Web', 'Present'),
    new Employee(2,'Linna', 'Yu','Software Engineer', 'Anna Lyashenko', 'Australian Permanent Resident','N/A','China','Phantom Mobile', 'Present' ),
    new Employee(4, 'Anna', 'Lyashenko', 'Software Development Manager',  'John Stevenson', 'Australian Citizen', 'N/A', 'Australia', 'Phantom Web', 'Absent') ,
    new Employee(3, 'Nancy', 'Sainthong', 'Software Development Manager',  'John Stevenson', 'Australian Citizen', 'N/A', 'Australia', 'Phantom Mobile', 'Present')  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
