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

  modif(idPaiement:number){
    this.router.navigateByUrl('modifierPaiementAdmin/'+idPaiement)
  }

  suppr (idPaiement:number){
    this.servicePaiement.supprimer(idPaiement).subscribe(
      response=>this.recupererTt()
    )
  }
}
