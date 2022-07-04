import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../../models/utilisateur';
import { UtilisateurService } from '../../service/utilisateur.service';

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
    this.user=new Utilisateur()
  }



  login(){
   this.service.authenticate(this.user.username, this.user.password).subscribe(
     response=>{
       sessionStorage.setItem("token", "Bearer "+response.jwt)
       sessionStorage.setItem("username", this.user.username)
       
       this.validUser=false
       this.service.getU().subscribe(
         response=>{
           
           this.user=response
          // console.log(this.user.role.idRole)
           
           
         sessionStorage.setItem("u",JSON.stringify(this.user))
         if (this.user.role.libRole==="participant"){
          this.router.navigateByUrl('Acceuil')
         }else{
          this.router.navigateByUrl('AcceuilAdmin')
         }
         

         }
       )
     },
     error=>
      {
        console.log("ca marche pas")
        this.validUser=true
        this.router.navigateByUrl('Connection')
      }
   )}


  createBasicHttpHeader() {
    let basicchaine='Basic '+window.btoa(this.user.username+':'+this.user.password);
    return basicchaine
  }

  versInscription(){
    this.router.navigateByUrl('Inscription')
  }

}
