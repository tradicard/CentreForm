import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-crediter-compte',
  templateUrl: './crediter-compte.component.html',
  styleUrls: ['./crediter-compte.component.css']
})
export class CrediterCompteComponent implements OnInit {

  participant!:Participant
  valeur!:number
  constructor(private serviceParticipant:ParticipantService,private router:Router) { }

  ngOnInit(): void {
    this.recupererParticipant()
  }

  recupererParticipant () {
    
    if (sessionStorage.getItem("idp")!==undefined) {
      
      const idp=Number(sessionStorage.getItem("idp"))
    this.serviceParticipant.getById(idp).subscribe(
      response=>{this.participant=response
      console.log(this.participant)}
    )}
  }

  SaveCredit () {
    const idp=Number(sessionStorage.getItem("idp"))
    let formData=new FormData();
    formData.append("valeur",this.valeur.toString())
    formData.append("idp",idp.toString())
   
    if (confirm("Etes vous sur ?")) {
      alert("Ajout de fond reussi! Merci !")
      this.serviceParticipant.crediterCompte(formData).subscribe(
        response=>{
          this.router.navigateByUrl("PaiementParticipant")
        }
        
      )
    } else {
      alert("Ajout de fond annule!")
    }
    
  }
}
