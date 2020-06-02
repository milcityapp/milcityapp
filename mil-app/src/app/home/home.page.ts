import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  citiesData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.citiesData = [];
  }
 
  ngOnInit() {
    this.getAllCities();
  }
 
  getAllCities() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.citiesData = response;
    })
  }

}
