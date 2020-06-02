import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../models/city';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cidade-en',
  templateUrl: './cidade-en.page.html',
  styleUrls: ['./cidade-en.page.scss'],
})
export class CidadeEnPage implements OnInit {
  id: number;
  data: City;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) { 
    this.data = new City();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

}
