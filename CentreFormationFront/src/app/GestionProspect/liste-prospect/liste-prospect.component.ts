import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from 'src/app/models/prospect';
import { ProspectService } from 'src/app/service/prospect.service';

@Component({
  selector: 'app-liste-prospect',
  templateUrl: './liste-prospect.component.html',
  styleUrls: ['./liste-prospect.component.css']
})
export class ListeProspectComponent implements OnInit {
prospects!:Prospect[]
  constructor(private router:Router,private service:ProspectService) { }

  ngOnInit(): void {
    this.recuperer()
  }

  recuperer(){
    this.service.getAll().subscribe(
      response=>this.prospects=response
    )
  }
  recuperer2(){
    this.service.getAll().subscribe(
      response=>this.prospects=response
    )
  }
  cont(idProspect:number){

  }

  suppr(id:number){
    this.service.supprimer(id).subscribe(
      response=>{
        this.recuperer2();
      }
    )
  }
  modif(id:number){
    this.router.navigateByUrl('ModifProspects/'+id)
  }
}
