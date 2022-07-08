import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paiement } from 'src/app/models/paiement';
import { PaiementService } from 'src/app/service/paiement.service';

@Component({
  selector: 'app-afficher-paiement-admin',
  templateUrl: './afficher-paiement-admin.component.html',
  styleUrls: ['./afficher-paiement-admin.component.css']
})
export class AfficherPaiementAdminComponent implements OnInit {

  paiements!:Paiement[]

  constructor(private servicePaiement:PaiementService,private router:Router) { }

  ngOnInit(): void {
    this.recupererTt()
  }

  recupererTt () {
    this.servicePaiement.getAll().subscribe(
      response=>this.paiements=response
    )
  }


  suppr (idPaiement:number){
    this.servicePaiement.supprimer(idPaiement).subscribe(
      response=>this.recupererTt()
    )
  }

  versPaiementParticipant(idParticipant:number) {
    this.router.navigateByUrl('PaiementParticipantAdmin/'+idParticipant)
  }

  relance(idParticipant:number)
  {
    this.router.navigateByUrl('RelancePaiement/'+idParticipant)
  }
}
