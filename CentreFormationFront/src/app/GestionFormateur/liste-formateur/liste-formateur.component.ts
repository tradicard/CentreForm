import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { FormateurService } from 'src/app/service/formateur.service';

@Component({
  selector: 'app-liste-formateur',
  templateUrl: './liste-formateur.component.html',
  styleUrls: ['./liste-formateur.component.css']
})
export class ListeFormateurComponent implements OnInit {

  formateurs!:Formateur[]
  f!:Formateur
  constructor(private service:FormateurService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recuperer()
  }

  recuperer() {
    this.service.getAll().subscribe(
      response=>this.formateurs=response)
  }

  recupererP() {
    const idFormateur=+this.route.snapshot.params['id']
    console.log(idFormateur)
    this.service.getById(idFormateur).subscribe(
      response=>this.f=response)
  }

  supprimer(idFormateur:number){
    this.service.supprimer(idFormateur).subscribe(
      response=>this.recuperer()
    )
  }

  versadd(){
    this.router.navigateByUrl('ajouterFormateur')
  }

  versmodif(idFormateur:number){
    this.router.navigateByUrl('modifierFormateur/'+idFormateur)
  }

}
