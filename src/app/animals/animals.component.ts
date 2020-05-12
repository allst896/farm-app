import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

export interface Animal {
  AnimalId: number,
  Badge: string,
  DamId: number,
  SireId: number,
  DOB: string
}

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals = [];
  displayedColumns: string[] = ['AnimalId', 'Badge', 'DamId', 'SireId', 'DOB'];
  dataSource = this.animals;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.dataSource = data;
    })
  }
}