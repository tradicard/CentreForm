import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from 'src/app/models/assistant';
import { Commercial } from 'src/app/models/commercial';
import { Formateur } from 'src/app/models/formateur';
import { Participant } from 'src/app/models/participant';
import { Role } from 'src/app/models/role';
import { AssistantService } from 'src/app/service/assistant.service';
import { CommercialService } from 'src/app/service/commercial.service';
import { FormateurService } from 'src/app/service/formateur.service';
import { ParticipantService } from 'src/app/service/participant.service';
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
  c!:Commercial
  p!:Participant
  constructor(private service:UtilisateurService,private router:Router,private serviceasssit:AssistantService,private servicerole:RoleService,
    private serviceform:FormateurService, private servicecom:CommercialService,private servicepart:ParticipantService) { }

  ngOnInit(): void {
     this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['Connection']);
      });  
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
      if(this.selectedValue==="assistant"){
        console.log("ok if")
        this.pourassist()
      }
      if(this.selectedValue==="formateur"){
        console.log("ok if2")
        this.pourform()
      }
      if(this.selectedValue==="commercial"){
        console.log("ok if3")
        this.pourcom()
      }
      if(this.selectedValue==="participant"){
        console.log("ok if4")
        this.pourpart()
      }
      if(this.selectedValue==="admin"){
        console.log("ok if5")
        this.service.getByUsername(this.username).subscribe(
          response=>{ this.user=response
          console.log("fine")
    
          sessionStorage.setItem("u",JSON.stringify(this.user))
          let uStr = sessionStorage.getItem("u");
          if (uStr) {
            this.user = JSON.parse(uStr) as Utilisateur;
          }
          console.log(this.user.id)
    
    
           this.router.navigateByUrl('AcceuilAdmin')})
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

      sessionStorage.setItem("a",JSON.stringify(this.a))
      let uStr = sessionStorage.getItem("a");
      if (uStr) {
        this.a = JSON.parse(uStr) as Assistant;
      }
      console.log(this.a.id)


       this.router.navigateByUrl('AcceuilAdmin')})

   }
   pourform(){
    this.serviceform.getByUsername(this.username).subscribe(
      response=>{ this.f=response
      console.log("fine")

      sessionStorage.setItem("f",JSON.stringify(this.f))
      let uStr = sessionStorage.getItem("f");
      if (uStr) {
        this.f = JSON.parse(uStr) as Formateur;
      }
      console.log(this.f.id)


       this.router.navigateByUrl('AcceuilAdmin')})

   }

   pourcom(){
    this.servicecom.getByUsername(this.username).subscribe(
      response=>{ this.c=response
      console.log("fine")

      sessionStorage.setItem("c",JSON.stringify(this.c))
      let uStr = sessionStorage.getItem("c");
      if (uStr) {
        this.c = JSON.parse(uStr) as Commercial;
      }
      console.log(this.c.id)


       this.router.navigateByUrl('AcceuilAdmin')})

   }

   pourpart(){
    this.servicepart.getByUsername(this.username).subscribe(
      response=>{ this.p=response
      console.log("fine")

      sessionStorage.setItem("p",JSON.stringify(this.p))
      let uStr = sessionStorage.getItem("p");
      if (uStr) {
        this.p = JSON.parse(uStr) as Participant;
      }
      console.log(this.p.id)


       this.router.navigateByUrl('Acceuil')})

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
