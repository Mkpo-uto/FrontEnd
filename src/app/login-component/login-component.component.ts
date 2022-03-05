import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  Id = '1'
  FirstName = 'Mkpo-uto'
  LastName = 'Edet'
  JobTitle = 'Software Engineer'

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.Id, this.FirstName, this.LastName, this.JobTitle)
    this.router.navigate(['welcome', this.Id])
  }

}
