import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {
user!:Utilisateur
  constructor(private service:UtilisateurService,private router:Router) { }

  ngOnInit(): void {
    this.recupererU()
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

}
