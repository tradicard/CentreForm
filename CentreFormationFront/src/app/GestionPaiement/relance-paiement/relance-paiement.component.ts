import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from 'src/app/models/paiement';
import { Participant } from 'src/app/models/participant';
import { Relance } from 'src/app/models/relance';
import { EmailService } from 'src/app/service/email.service';
import { PaiementService } from 'src/app/service/paiement.service';
import { ParticipantService } from 'src/app/service/participant.service';
import { RelanceService } from 'src/app/service/relance.service';

@Component({
  selector: 'app-relance-paiement',
  templateUrl: './relance-paiement.component.html',
  styleUrls: ['./relance-paiement.component.css']
})
export class RelancePaiementComponent implements OnInit {

  participant!:Participant
  participants!:Participant[]

  paiements!:Paiement[]
  relance!:Relance

  idParticipant!:number

  validEnvoi=false

  constructor(private route:ActivatedRoute, private router:Router, 
    private servicePart:ParticipantService, 
    private servicePaie:PaiementService,
    private serviceMail:EmailService, 
    private serviceRelance:RelanceService) { }

  ngOnInit(): void {
    this.recupererParticipant()
    this.recupSesPaiements()
    this.relance=new Relance()
  }

  //Fonction ajouter relance avec resultat envoi mail
  //Faire liste participants qui n'ont pas encore payé ?
  //envoi à id du participant

 

  recupererParticipant()
  {
    const idParticipant=this.route.snapshot.params['id']
    this.servicePart.getById(idParticipant).subscribe
    (
      response=> 
      {
      this.participant=response
      }
    )
  }

  recupSesPaiements()
  {
    const idParticpant=this.route.snapshot.params['id']
    this.servicePaie.getByIdParticipant(idParticpant).subscribe
    (
      response=>
      {
        this.paiements=response
      }
    )
  }


  ajouterRelance()
  {
    this.relance.participant=this.participant
    this.serviceRelance.ajouter(this.relance).subscribe
    ()
  }

  relancerLePaiement()
  {
    this.relance.participant=this.participant
    this.serviceRelance.ajouter(this.relance).subscribe(
     response=>
     {this.relance=response
      this.serviceMail.sendSimpleEmail(this.relance).subscribe()
     }
    )
    var res=confirm("Le mail a bien été envoyé au participant.")
  }

}
