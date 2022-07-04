import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { FormationService } from 'src/app/service/formation.service';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.css']
})
export class ModifierFormationComponent implements OnInit {

  f!:Formation
  idF!:number

  participants!:Participant[]
  p!:Participant

  selectedValue!:Participant[]

  constructor(private route:ActivatedRoute,private router:Router, private serviceFormation:FormationService, private serviceParticipant:ParticipantService) { }

 //PROBLEME : reconnait pas les méthodes du service

  ngOnInit(): void {
    const id=+this.route.snapshot.params['idFormation']
    this.recupererFormation(this.idF)
    this.f=new Formation()

    this.serviceParticipant.getAll().subscribe(response=>this.participants=response)
  }

 

  recupererFormation(idFormation:number) {
    //PROBLEME
    this.serviceFormation.getById(idFormation).subscribe(
    response=>this.f=response
    )
  }

  modif()
  {
    
    this.serviceFormation.modifier(this.f).subscribe
    (
      response=>{this.f=response
        this.router.navigateByUrl('GestionFormation')}
      )
  }

  retour(): void {
    
    this.router.navigateByUrl('/Acceuil')
  }

}
