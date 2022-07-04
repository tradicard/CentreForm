import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { FormateurService } from 'src/app/service/formateur.service';

@Component({
  selector: 'app-modifier-formateur',
  templateUrl: './modifier-formateur.component.html',
  styleUrls: ['./modifier-formateur.component.css']
})
export class ModifierFormateurComponent implements OnInit {

  formateur!:Formateur
  constructor(private route:ActivatedRoute,private service:FormateurService,private router:Router) { }

  ngOnInit(): void {
    this.recupererC()
  }

  SaveFormateur() {
    this.service.modifier(this.formateur).subscribe(response=>{this.router.navigateByUrl('afficherFormateur')})
  }

  recupererC() {
    const idCategorie=+this.route.snapshot.params['id']
    this.service.getById(idCategorie).subscribe(
      response=>this.formateur=response)
  }

}
