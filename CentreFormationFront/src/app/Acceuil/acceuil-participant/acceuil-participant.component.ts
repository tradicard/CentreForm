import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-acceuil-participant',
  templateUrl: './acceuil-participant.component.html',
  styleUrls: ['./acceuil-participant.component.css']
})
export class AcceuilParticipantComponent implements OnInit {
cherche!:string
formations!:Formation[]
  constructor(private router:Router, private service:FormationService) { }

  ngOnInit(): void {
    this.recuperer()
  }

  recuperer(){
    this.service.getAll().subscribe(
      response=> this.formations=response
    )
  }

  searchform(){
    this.router.navigateByUrl('searchformation/'+this.cherche)
  }

  inscription(idFormation:number){
    this.router.navigateByUrl('search/'+this.cherche)
  }

}
