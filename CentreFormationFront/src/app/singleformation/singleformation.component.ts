import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/formation';
import { Participant } from '../models/participant';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-singleformation',
  templateUrl: './singleformation.component.html',
  styleUrls: ['./singleformation.component.css']
})
export class SingleformationComponent implements OnInit {
f!:Formation
u!:Participant
formations!:Formation[]
inscrit=false
  constructor(private service:FormationService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  recupererP() {
    let uStr = sessionStorage.getItem("u");
    if (uStr) {
      this.u = JSON.parse(uStr) as Participant;
    }
    const idProduit=+this.route.snapshot.params['id']
    console.log(idProduit)
    this.service.getById(idProduit).subscribe(
    response=>{this.f=response
      for(let pa of this.f.participants){
        if(pa.username===this.u.username){
          this.inscrit=true;
        }
      }
      }
    )
    
  }

  inscription(idFormation:number){

    
    this.service.getById(idFormation).subscribe(
      response=>{
        this.f=response
        this.f.participants.push(this.u)
        this.service.modifier(this.f).subscribe(
          response=>this.inscrit=true
        )
      }
    )

  }

}
