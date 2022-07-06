import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormationService } from 'src/app/service/formation.service';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-participants-associes',
  templateUrl: './participants-associes.component.html',
  styleUrls: ['./participants-associes.component.css']
})
export class ParticipantsAssociesComponent implements OnInit {

  @Input() u!:Utilisateur

  idFormation!:number
  idParticipant!:number

  f!:Formation
  p!:Participant

  participants!:Participant[]

  constructor(private serviceFormation:FormationService, private router:Router, private route:ActivatedRoute, private serviceParticipant:ParticipantService) { }

  ngOnInit(): void {
    //this.ParticipantsAssocies(this.idFormation)
  }

  /*ParticipantsAssocies(idFormation:number)
  {
    const id=this.route.snapshot.params['idFormation']
    this.serviceFormation.getById(id).subscribe
    (
     response=>this.f=response
    
    )
    
  
    
    
  }
  }*/


  retour():void
  {
    this.router.navigateByUrl('GestionFormation')
 
    
  }
}
