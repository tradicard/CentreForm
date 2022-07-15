import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/formation';
import { HistoriqueParticipant } from '../models/historique-participant';
import { Paiement } from '../models/paiement';
import { Participant } from '../models/participant';
import { Quizz } from '../models/quizz';
import { Resultat } from '../models/resultat';
import { FormationService } from '../service/formation.service';
import { HistoriqueparticipantService } from '../service/historiqueparticipant.service';
import { PaiementService } from '../service/paiement.service';
import { QuizzService } from '../service/quizz.service';
import { ResultatService } from '../service/resultat.service';

@Component({
  selector: 'app-singleformation',
  templateUrl: './singleformation.component.html',
  styleUrls: ['./singleformation.component.css']
})
export class SingleformationComponent implements OnInit {
f!:Formation
p!:Participant
formations!:Formation[]
inscrit=false
historique!:HistoriqueParticipant
paiement!:Paiement
quizzz!:Quizz[]
resultats!:Resultat[]
resultats2!:Resultat[]
r!:Resultat
resultats3!:Resultat[]
verif:boolean=false
verifs!:boolean[]

  constructor(private service:FormationService,private route:ActivatedRoute,private router:Router,
     private servicehistp:HistoriqueparticipantService,private servicePaiement:PaiementService, private serviceQuizz:QuizzService,
     private serviceResultat:ResultatService) { }

  ngOnInit(): void {
    this.verifs=[]
    this.resultats2=[]
    this.recupererP()

    this.paiement=new Paiement()
    this.historique=new HistoriqueParticipant()


    this.r=new Resultat()

  }


  recupererP() {
    let uStr = sessionStorage.getItem("u");
    if (uStr) {
      this.p = JSON.parse(uStr) as Participant;
    }
    const idProduit=+this.route.snapshot.params['id']
    console.log(idProduit)
    this.service.getById(idProduit).subscribe(
    response=>{this.f=response
      
      this.serviceQuizz.getByIdFormation(this.f.idFormation).subscribe(
        response=>{
          this.quizzz=response
          console.log(this.quizzz)
          for(let pa of this.f.participants){
            if(pa.username===this.p.username){
              this.inscrit=true;
              console.log(this.inscrit)
            }
          }
          this.serviceResultat.getAll().subscribe(
            response=>{
              this.resultats=response

              for(let q of this.quizzz){
                for(let r of this.resultats){
                  if(r.quizz.idQuizz===q.idQuizz && r.participant.id===this.p.id){
                    this.verif=true
                  }
                }
                this.verifs.push(this.verif)
                this.verif=false
              }
              console.log(this.verifs)
            }
            
          )

          
  
        })

      
      }
    )
    
  }





  fairequizz(id:number){

        this.router.navigateByUrl('test/'+id)
    
  }
  afficherdipl(idQuizz:number){
    this.serviceResultat.getAll().subscribe(
      response=>{
        this.resultats3=response
        for(let q of this.resultats3){
          if(q.quizz.idQuizz===idQuizz && q.participant.id===this.p.id){
            this.router.navigateByUrl('affichediplome/'+q.idResultat)
          }
        }
      }
    )
  }

  inscription(){

    this.f.participants.push(this.p)
    for(let pa of this.f.participants){
      console.log(pa.id)
    }
    this.service.modifier(this.f).subscribe(
      response=>{
        console.log("apres modif")
        this.inscrit=true
        this.historique.participant=this.p
        this.historique.formation=this.f
        console.log("avant hist")
        this.servicehistp.ajouter(this.historique).subscribe()


        //Ajout paiement
        this.paiement.montant=this.f.prix
        this.paiement.reste=this.f.prix
        this.paiement.participant=this.p
        this.servicePaiement.ajouter(this.paiement).subscribe()
      }
    )
  }

}
