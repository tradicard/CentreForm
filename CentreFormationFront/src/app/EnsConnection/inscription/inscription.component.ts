import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from 'src/app/models/participant';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user!:Participant
  constructor(private service:UtilisateurService,private router:Router) { }

  ngOnInit(): void {
    this.user=new Participant()
  }

  inscription() {
    console.log(this.user.nom)
    console.log(this.user.prenom)
    console.log(this.user.password)
    console.log(this.user.username)
    console.log(this.user.mail)
    this.service.inscrire(this.user).subscribe(
      response=>{this.router.navigateByUrl('Connection')})
  }

}
