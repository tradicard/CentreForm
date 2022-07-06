import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { FormateurService } from 'src/app/service/formateur.service';
import { FormationService } from 'src/app/service/formation.service';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.css']
})
export class ModifierFormationComponent implements OnInit {

  f!:Formation
  idF!:number
  forma!:number
  

  participants!:Participant[]
  p!:Participant

  
  formateurs!:Formateur[]

  constructor(private route:ActivatedRoute,private router:Router, private serviceFormation:FormationService, private serviceForm:FormateurService) { }



  ngOnInit(): void {
    const id=+this.route.snapshot.params['idFormation']
    this.recupererFormation(id)
    this.chargerLesFormateurs();
    
  

  }

  chargerLesFormateurs()
  {
    this.serviceForm.getAllLibre().subscribe(
      response=>this.formateurs=response
    )
   
  }

  recupererFormation(idFormation:number) {
    
    this.serviceFormation.getById(idFormation).subscribe
    (
    response=>this.f=response
    )
  }

  modif()
  {
    
    this.serviceFormation.modifier(this.f).subscribe
    (
      response=>{this.f=response
        this.router.navigateByUrl('GestionFormation')}
      )
  }

  retour(): void {
    
    this.router.navigateByUrl('GestionFormation')
  }

}
