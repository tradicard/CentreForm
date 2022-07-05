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
  cont(idProspect:number){
    this.router.navigateByUrl('contactduProspect/'+idProspect)
  }

  modif(idProspect:number){
    this.router.navigateByUrl('modifierProspect/'+idProspect)
  }

  supp (idProspect:number){
    this.service.supprimer(idProspect).subscribe(
      response=>this.recuperer()
    )
  }
}
