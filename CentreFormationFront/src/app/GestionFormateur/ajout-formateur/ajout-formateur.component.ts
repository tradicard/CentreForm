import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormateurService } from 'src/app/service/formateur.service';

@Component({
  selector: 'app-ajout-formateur',
  templateUrl: './ajout-formateur.component.html',
  styleUrls: ['./ajout-formateur.component.css']
})
export class AjoutFormateurComponent implements OnInit {

  formateur!:Formateur
  historiqueFormation!:Formation[]

  constructor(private service:FormateurService,private router:Router) { }

  ngOnInit(): void {
    this.historiqueFormation=[]
    this.formateur=new Formateur (0,this.historiqueFormation,"","","","","")
  }


  SaveFormateur () {
    this.service.ajouter(this.formateur).subscribe(
      response => {
        this.router.navigateByUrl('afficherFormateur')
      }
    )
  }

}
