import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-acceuil-participant',
  templateUrl: './acceuil-participant.component.html',
  styleUrls: ['./acceuil-participant.component.css']
})
export class AcceuilParticipantComponent implements OnInit {
cherche!:string
formations!:Formation[]
formationsparu!:Formation[]

u!:Participant
  constructor(private router:Router, private service:FormationService) { }

  ngOnInit(): void {
    let uStr = sessionStorage.getItem("u");
    if (uStr) {
      this.u = JSON.parse(uStr) as Participant;
    }
    console.log(this.u.id)
    this.recupererParParticipant()

    this.recuperer()
  }

  recuperer(){
    this.service.getAll().subscribe(
      response=> this.formations=response
    )
  }

  recupererParParticipant(){
    this.service.getAllbyIdPart(this.u.id).subscribe(
      response=>this.formationsparu=response
    )

  }

  searchform(){
    sessionStorage.setItem("ch",this.cherche)
    let libform=sessionStorage.getItem('ch')
    console.log(libform)
    this.router.navigateByUrl('searchformation')
  }

  inscription(idFormation:number){
    this.router.navigateByUrl('inscriptionformation/'+idFormation)
  }

}
