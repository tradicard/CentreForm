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
<<<<<<< HEAD
    this.user=new Participant()
=======
    this.user=new Utilisateur()
>>>>>>> 69851a7b26d1828166f617bb4b2e6cd20fde2814
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
