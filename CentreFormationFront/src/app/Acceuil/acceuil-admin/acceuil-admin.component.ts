import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Assistant } from 'src/app/models/assistant';
import { RoleService } from 'src/app/service/role.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { Participant } from 'src/app/models/participant';
import { Formateur } from 'src/app/models/formateur';
import { Commercial } from 'src/app/models/commercial';
import { AssistantService } from 'src/app/service/assistant.service';
import { ParticipantService } from 'src/app/service/participant.service';
import { FormateurService } from 'src/app/service/formateur.service';
import { CommercialService } from 'src/app/service/commercial.service';

@Component({
  selector: 'app-acceuil-admin',
  templateUrl: './acceuil-admin.component.html',
  styleUrls: ['./acceuil-admin.component.css']
})
export class AcceuilAdminComponent implements OnInit {
utilisateurs!:Utilisateur[]
u!:Utilisateur
a!:Assistant
p!:Participant
f!:Formateur
c!:Commercial
r!:Role
roles!:Role[]
selectedValue!:number
selectedOption!:string
id!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
  constructor(private router:Router,private serviceUtil:UtilisateurService,private servicerole:RoleService,private serviceassist:AssistantService,
    private servicepart:ParticipantService, private serviceForm:FormateurService, private serviceCom:CommercialService) { }

  ngOnInit(): void {
    this.recupUtilisateur()
    this.recupereR()
    
  }
  gestionpaiement(){
    this.router.navigateByUrl('afficherPaiementAdmin')
  }

  gestionformation(){
    this.router.navigateByUrl('GestionFormation')
  }
  gestionformateur(){
    this.router.navigateByUrl('afficherFormateur')
  }
  gestionprospect(){
    this.router.navigateByUrl('afficherProspects')
  }
  recupUtilisateur(){
    this.serviceUtil.getAllUtilisateurs().subscribe(
      response=> this.utilisateurs=response
    )
  }
  recupereR(){
    this.servicerole.getAll().subscribe(
      response=>this.roles=response
    )
  }
  rol(){
    this.serviceUtil.getAllUtilisateursByRole(this.selectedValue).subscribe(
      response=>{this.utilisateurs=response
      }
    )
  }
  reset(){
    this.ngOnInit()
  }
  ajouter(){
    if(this.selectedOption==="assistant"){
      console.log("ok if")
      this.a.id=this.id
      this.a.mail=this.mail
      this.a.nom=this.nom
      this.a.prenom=this.prenom
      this.a.password=this.password
      this.a.username=this.username
      this.servicerole.getByLibRole(this.selectedOption).subscribe(
        response=>{this.r=response
          this.a.role=this.r
          this.serviceassist.ajouter(this.a).subscribe(
            response=>this.reset())
        }
      )

    }
    if(this.selectedOption==="formateur"){
      console.log("ok if2")
      this.f.id=this.id
      this.f.mail=this.mail
      this.f.nom=this.nom
      this.f.prenom=this.prenom
      this.f.password=this.password
      this.f.username=this.username
      this.servicerole.getByLibRole(this.selectedOption).subscribe(
        response=>{this.r=response
          this.f.role=this.r
          this.serviceForm.ajouter(this.f).subscribe(
            response=>this.reset())
        }
      )
    }
    if(this.selectedOption==="commercial"){
      console.log("ok if3")
      this.c.id=this.id
      this.c.mail=this.mail
      this.c.nom=this.nom
      this.c.prenom=this.prenom
      this.c.password=this.password
      this.c.username=this.username
      this.servicerole.getByLibRole(this.selectedOption).subscribe(
        response=>{this.r=response
          this.c.role=this.r
          this.serviceCom.ajouter(this.c).subscribe(
            response=>this.reset())
        }
      )
    }
    if(this.selectedOption==="participant"){
      console.log("ok if4")
      this.p.id=this.id
      this.p.mail=this.mail
      this.p.nom=this.nom
      this.p.prenom=this.prenom
      this.p.password=this.password
      this.p.username=this.username
      this.servicerole.getByLibRole(this.selectedOption).subscribe(
        response=>{this.r=response
          this.p.role=this.r
          this.servicepart.ajouter(this.p).subscribe(
            response=>this.reset())
        }
      )
    }
    if(this.selectedOption==="admin"){
      this.u.id=this.id
      this.u.mail=this.mail
      this.u.nom=this.nom
      this.u.prenom=this.prenom
      this.u.password=this.password
      this.u.username=this.username
      this.servicerole.getByLibRole(this.selectedOption).subscribe(
        response=>{this.r=response
          this.u.role=this.r
          this.serviceUtil.ajouterUtilisateur(this.u).subscribe(
            response=>this.reset())
        }
      )


  }
  
}
supprimer(idFormateur:number){
  this.serviceUtil.supprimerUtilisateur(idFormateur).subscribe(
    response=>this.ngOnInit()
  )
}



versmodif(idFormateur:number){
  this.router.navigateByUrl('modifierUtilisateur/'+idFormateur)
}

afficherPaiement() {
  this.router.navigateByUrl("afficherPaiementAdmin")
}
}
