import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriqueFormateur } from 'src/app/models/historique-formateur';
import { HistoriqueParticipant } from 'src/app/models/historique-participant';
import { Utilisateur } from 'src/app/models/utilisateur';
import { HistoriqueformateurService } from 'src/app/service/historiqueformateur.service';
import { HistoriqueparticipantService } from 'src/app/service/historiqueparticipant.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {
user!:Utilisateur
hist!:HistoriqueParticipant[]
histf!:HistoriqueFormateur[]
b!:boolean
part="participant"
ad="admin"
com="commercial"
ass="assistant"
fo="formateur"
  constructor(private service:UtilisateurService,private router:Router,private servicehist:HistoriqueparticipantService,
    private servicehistf:HistoriqueformateurService) { }

  ngOnInit(): void {
    this.recupererU()
    this.recup()
  }

  recupererU(){
    let uStr = sessionStorage.getItem("u");
    if (uStr) {
      this.user = JSON.parse(uStr) as Utilisateur;
    }
    
  }
  modif() {
    console.log(this.user.nom)
    console.log(this.user.prenom)
    console.log(this.user.password)
    console.log(this.user.username)
    console.log(this.user.mail)
    this.service.modifierUtilisateur(this.user).subscribe(
      response=>{this.user=response
        sessionStorage.removeItem('u')
        sessionStorage.setItem("u",JSON.stringify(this.user))
        this.recupererU()
      })
  }

  recup(){
    if(this.user.role.librole==="participant"){
    this.servicehist.getByIdParticipant(this.user.id).subscribe(
      response=>{this.hist=response
      this.b=true}
    )
  }
  if(this.user.role.librole==="formateur"){
    this.servicehistf.getByIdFormateur(this.user.id).subscribe(
      response=>{this.histf=response
      this.b=false}
    )
  }
  }

  retour1(){
    this.router.navigateByUrl('Acceuil')
  }
  retour2(){
    this.router.navigateByUrl('formationsDuFormateur/'+this.user.id)
  }
  retour3(){
    this.router.navigateByUrl('AcceuilAdmin')
  }
  retour4(){
    this.router.navigateByUrl('afficherPaiementAdmin')
  }
  retour5(){
    this.router.navigateByUrl('afficherProspects')
  }
  paye(){
    this.router.navigateByUrl('PaiementParticipant')
  }

}
