import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from 'src/app/models/paiement';
import { Participant } from 'src/app/models/participant';
import { PaiementService } from 'src/app/service/paiement.service';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-afficher-paiement',
  templateUrl: './afficher-paiement.component.html',
  styleUrls: ['./afficher-paiement.component.css']
})
export class AfficherPaiementComponent implements OnInit {

  participant!:Participant
  paiements!:Paiement[]

  constructor(
    private servicePaiement:PaiementService
    ,private router:Router
    ,private serviceParticipant:ParticipantService
    ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recupererPaiementpourParticipant()
    
  }

  recupererPaiementpourParticipant () {
    if (sessionStorage.getItem("idp")!==undefined) {
      const idp=Number(sessionStorage.getItem("idp"))
    this.serviceParticipant.getById(idp).subscribe(
      response=>{
        this.participant=response
        this.servicePaiement.getByIdParticipant(idp).subscribe(
          response=>{
            this.paiements=response}
        )
        
        
        }
       )
    }
    
   

  }

  verscredit(){
    this.router.navigateByUrl('CrediterCompte')
  }

  payer(idPaiement:number) {
    this.router.navigateByUrl('Paiement/'+idPaiement)
  }
}
