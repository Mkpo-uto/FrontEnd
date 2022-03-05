import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.css']
})
export class WelcomeComponentComponent implements OnInit {

  Id = this.route.snapshot.params['Id']
  
  constructor( private route : ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    console.log(this.Id )
    this.Id
    
  }

  getWelcomeMessage(){
    console.log(this.service.executeShipRESTService());
    this.service.executeShipRESTService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response : Employee[]){
    console.log(response);
    
  }

}
