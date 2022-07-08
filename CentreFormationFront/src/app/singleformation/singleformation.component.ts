import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/formation';
import { HistoriqueParticipant } from '../models/historique-participant';
import { Paiement } from '../models/paiement';
import { Participant } from '../models/participant';
import { FormationService } from '../service/formation.service';
import { HistoriqueparticipantService } from '../service/historiqueparticipant.service';
import { PaiementService } from '../service/paiement.service';

@Component({
  selector: 'app-singleformation',
  templateUrl: './singleformation.component.html',
  styleUrls: ['./singleformation.component.css']
})
export class SingleformationComponent implements OnInit {
f!:Formation
p!:Participant
formations!:Formation[]
inscrit=false
historique!:HistoriqueParticipant
paiement!:Paiement

  constructor(private service:FormationService,private route:ActivatedRoute,private router:Router,
     private servicehistp:HistoriqueparticipantService,private servicePaiement:PaiementService) { }

  ngOnInit(): void {
    this.recupererP()
    this.paiement=new Paiement()

  }


  recupererP() {
    let uStr = sessionStorage.getItem("p");
    if (uStr) {
      this.p = JSON.parse(uStr) as Participant;
    }
    const idProduit=+this.route.snapshot.params['id']
    console.log(idProduit)
    this.service.getById(idProduit).subscribe(
    response=>{this.f=response
      for(let pa of this.f.participants){
        if(pa.username===this.p.username){
          this.inscrit=true;
        }
      }
      }
    )
    
  }

  inscription(){

    this.f.participants.push(this.p)
    for(let p of this.f.participants){
      console.log(p.id)
    }
    this.service.modifier(this.f).subscribe(
      response=>{
        this.inscrit=true
        this.historique.participant=this.p
        this.historique.formation=this.f
        this.servicehistp.ajouter(this.historique).subscribe()


        //Ajout paiement
        this.paiement.montant=this.f.prix
        this.paiement.reste=this.f.prix
        this.paiement.participant=this.p
        this.servicePaiement.ajouter(this.paiement).subscribe()
      }
    )
  }

}
