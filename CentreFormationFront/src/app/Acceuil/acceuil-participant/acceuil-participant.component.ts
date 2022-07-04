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
    this.recupererPauParticipant()

    this.recuperer()
  }

  recuperer(){
    this.service.getAll().subscribe(
      response=> this.formations=response
    )
  }
  recupererPauParticipant(){
    this.service.getAll().subscribe(
      response=> {this.formations=response
        for(let fo of this.formations){
          for(let pa of fo.participants){
            if(pa===this.u){
              this.formationsparu.push(fo)

            }
          }
        }
      }
    )
  }

  searchform(){
    this.router.navigateByUrl('searchformation/'+this.cherche)
  }

  inscription(idFormation:number){
    this.router.navigateByUrl('inscriptionformation/'+idFormation)
  }

}
