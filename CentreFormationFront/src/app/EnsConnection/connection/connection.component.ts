import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from 'src/app/models/assistant';
import { Formateur } from 'src/app/models/formateur';
import { Participant } from 'src/app/models/participant';
import { Role } from 'src/app/models/role';
import { AssistantService } from 'src/app/service/assistant.service';
import { RoleService } from 'src/app/service/role.service';
import { Utilisateur } from '../../models/utilisateur';
import { UtilisateurService } from '../../service/utilisateur.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  username!:string;
  password!:string
  user!:Utilisateur
  validUser=false;
  a!:Assistant
  selectedValue!:string
  roles!:Role[]
  f!:Formateur
  constructor(private service:UtilisateurService,private router:Router,private serviceasssit:AssistantService,private servicerole:RoleService) { }

  ngOnInit(): void {
    this.user=new Utilisateur()
    this.recupererR()
  }



  login(){
  
   this.service.authenticate(this.username, this.password).subscribe(
     response=>{
       sessionStorage.setItem("token", "Bearer "+response.jwt)
       sessionStorage.setItem("username", this.user.username)
       
       this.validUser=false
      console.log(this.selectedValue)
      if(this.selectedValue=="assistant"){
        console.log("ok if")
        this.pourassist()
      }
      if(this.selectedValue=="formateur"){
        console.log("ok if2")
        this.pourassist()
      }
     },
     error=>
      {
        
        console.log("ca marche pas")
        this.validUser=true
        this.router.navigateByUrl('Connection')
      }
   )}

   pourassist(){
    this.serviceasssit.getByUsername(this.username).subscribe(
      response=>{ this.a=response
      console.log("fine")

      sessionStorage.setItem("u",JSON.stringify(this.a))
      let uStr = sessionStorage.getItem("u");
      if (uStr) {
        this.a = JSON.parse(uStr) as Assistant;
      }
      console.log(this.a.id)


       this.router.navigateByUrl('AcceuilAdmin')})

   }
   pourform(){
    this.serviceasssit.getByUsername(this.username).subscribe(
      response=>{ this.a=response
      console.log("fine")

      sessionStorage.setItem("u",JSON.stringify(this.a))
      let uStr = sessionStorage.getItem("u");
      if (uStr) {
        this.a = JSON.parse(uStr) as Assistant;
      }
      console.log(this.a.id)


       this.router.navigateByUrl('AcceuilAdmin')})

   }


  createBasicHttpHeader() {
    let basicchaine='Basic '+window.btoa(this.user.username+':'+this.user.password);
    return basicchaine
  }

  versInscription(){
    this.router.navigateByUrl('Inscription')
  }
  recupererR(){
    this.servicerole.getAll().subscribe(
      response=>{this.roles=response
      console.log(this.roles[0].idRole)}
    )
  }

}
