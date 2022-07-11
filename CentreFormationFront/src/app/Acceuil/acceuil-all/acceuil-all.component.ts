import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-acceuil-all',
  templateUrl: './acceuil-all.component.html',
  styleUrls: ['./acceuil-all.component.css']
})
export class AcceuilAllComponent implements OnInit {
formations!:Formation[]
  constructor(private service:FormationService) { }

  ngOnInit(): void {
    this.recuperer()
  }

  recuperer(){
    this.service.getAll().subscribe(
      response=> this.formations=response
    )
  }

}
