import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  user!:Utilisateur
  validUser=false;

  constructor(private service:UtilisateurService,private router:Router) { }

  ngOnInit(): void {
    this.user=new Utilisateur("","","","","")
  }


  connection(){
    this.service.authenticate(this.user.username,this.user.password).subscribe(
      data=>
      {
        this.validUser=false
        sessionStorage.setItem('token','Bearer '+data.jwt)
        console.log(data.jwt)
        this.router.navigateByUrl('accueil')
      },
      error=>
      {
        console.log("ca marche pas")
        this.validUser=true
        this.router.navigateByUrl('Connection')
      }
    )
  }

  createBasicHttpHeader() {
    let basicchaine='Basic '+window.btoa(this.user.username+':'+this.user.password);
    return basicchaine
  }

  versInscription(){
    this.router.navigateByUrl('Inscription')
  }

}
