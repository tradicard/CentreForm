import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-participants-associes',
  templateUrl: './participants-associes.component.html',
  styleUrls: ['./participants-associes.component.css']
})
export class ParticipantsAssociesComponent implements OnInit {

  @Input() u!:Utilisateur

  idFormation!:number

  constructor(private router:Router, private route:ActivatedRoute, private serviceParticipant:ParticipantService) { }

  ngOnInit(): void {
    this.ParticipantsAssocies(this.idFormation)
  }

  ParticipantsAssocies(idFormation:number)
  {
    const id=this.route.snapshot.params['idFormation']
   /* this.serviceParticipant.//Faire fonction get Formation Par participant dans controller/service
    getByIdFormation(id).subscribe
    (
      response=>{this.participants=response}
     
      
    )*/
  }

  retour () {
    
  }
}
