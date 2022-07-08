import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paiement } from 'src/app/models/paiement';
import { Participant } from 'src/app/models/participant';
import { PaiementService } from 'src/app/service/paiement.service';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  participant!:Participant
  paiement!:Paiement
  valeur!:number
  choixPaiement!:string

  constructor(
    private servicePaiement:PaiementService
    ,private router:Router
    ,private serviceParticipant:ParticipantService
    ,private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.recupererParticipant()
    this.recupererPaiement()
  }

  recupererParticipant () {
    if (sessionStorage.getItem("idp")!==undefined) {
      const idp=Number(sessionStorage.getItem("idp"))
    this.serviceParticipant.getById(idp).subscribe(
      response=>{this.participant=response})
      }
  }

  recupererPaiement () {
    const idPaiement=+this.route.snapshot.params['id']
    this.servicePaiement.getById(idPaiement).subscribe(
      response=>this.paiement=response
    )
    
  }

  SavePaiement (){
    if (this.choixPaiement==="solde") {
      if (this.participant.compte>=this.valeur) {
        const idPaiement=+this.route.snapshot.params['id']
        const idp=Number(sessionStorage.getItem("idp"))
        let formData=new FormData();
      formData.append("valeur",this.valeur.toString())
      formData.append("idp",idp.toString())
      formData.append("idPaiement",idPaiement.toString())
      this.servicePaiement.modifier(formData).subscribe(
        response=>{
          alert("Merci de votre paiement!")
          this.router.navigateByUrl('PaiementParticipant')
        }
      )
      }
      else {
        console.log("Manque de fond")
      }
    }
    else {
      console.log("Type de paiement non defini")
    }
  }

}
