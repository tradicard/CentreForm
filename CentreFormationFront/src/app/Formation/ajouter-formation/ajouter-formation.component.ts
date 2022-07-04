import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { FormateurService } from 'src/app/service/formateur.service';
import { FormationService } from 'src/app/service/formation.service';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {

  f!:Formation;
  p!:Participant;


  formations!:Formation[]
  participants!:Participant[]

  formateurs!:Formateur[]

  constructor(private route:ActivatedRoute,private router:Router, private serviceFormation:FormationService, private serviceForm:FormateurService) { }

  ngOnInit(): void {
    this.f=new Formation()

    this.serviceForm.getAll().subscribe(response=>this.formateurs=response)
  }

  ajouter()
  {
    this.serviceFormation.ajouter(this.f).subscribe(
      response=>{
        this.router.navigateByUrl('GestionFormation');}
    )
  }

  retour():void
  {
    this.router.navigateByUrl('/Acceuil')
  }
}
