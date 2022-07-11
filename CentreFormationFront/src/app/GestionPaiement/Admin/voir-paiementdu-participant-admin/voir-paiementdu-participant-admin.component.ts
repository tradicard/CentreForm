import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from 'src/app/models/paiement';
import { Participant } from 'src/app/models/participant';
import { PaiementService } from 'src/app/service/paiement.service';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-voir-paiementdu-participant-admin',
  templateUrl: './voir-paiementdu-participant-admin.component.html',
  styleUrls: ['./voir-paiementdu-participant-admin.component.css']
})
export class VoirPaiementduParticipantAdminComponent implements OnInit {

  participant!:Participant
  paiements!:Paiement[]

  constructor(private route:ActivatedRoute,private serviceParticipant:ParticipantService,private servicePaiement:PaiementService,private router:Router) { }

  ngOnInit(): void {
    this.recupererParticipant()
    this.recupererPaiements()
  }

  recupererParticipant () {
    
    const idParticipant=+this.route.snapshot.params['id']
    
    this.serviceParticipant.getById(idParticipant).subscribe(
      response=>{
        this.participant=response
      })
  }

  recupererPaiements() {
    const idParticipant=+this.route.snapshot.params['id']
    
    this.servicePaiement.getByIdParticipant(idParticipant).subscribe(
      response=>{
        this.paiements=response
      }
    )

  }

  suppr (idPaiement:number){
    this.servicePaiement.supprimer(idPaiement).subscribe(
      response=>this.ngOnInit()
    )
  }
  retour(){
    this.router.navigateByUrl('afficherPaiementAdmin')
  }
}
