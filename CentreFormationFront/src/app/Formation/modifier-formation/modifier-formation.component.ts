import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { HistoriqueFormateur } from 'src/app/models/historique-formateur';
import { Participant } from 'src/app/models/participant';
import { FormateurService } from 'src/app/service/formateur.service';
import { FormationService } from 'src/app/service/formation.service';
import { HistoriqueformateurService } from 'src/app/service/historiqueformateur.service';
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
  datedebu!:Date
  dated!:string
  datefin!:Date
  datef!:string
  formateur!:Formateur
  participants!:Participant[]
  p!:Participant

  
  historique!:HistoriqueFormateur
  selectedValue!:Formateur
  formateurs!:Formateur[]

  constructor(private route:ActivatedRoute,private router:Router, private serviceFormation:FormationService,
     private serviceForm:FormateurService,private datepipe:DatePipe, private servicehistf:HistoriqueformateurService) { }



  ngOnInit(): void {
    const id=+this.route.snapshot.params['idFormation']
    this.recupererFormation(id)
    this.chargerLesFormateurs();
    this.historique=new HistoriqueFormateur()
  

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
    
    this.serviceForm.getById(this.forma).subscribe(
      response=>
      {let latest_date =this.datepipe.transform(this.datedebu, 'M/d/yy, h:mm a');
        this.dated=latest_date!
        this.f.dateDebut=this.dated
        let latest_date2 =this.datepipe.transform(this.datefin, 'M/d/yy, h:mm a');
        this.datef=latest_date2!
        this.f.dateFin=this.datef
        this.formateur=response
        this.f.formateur=this.formateur
        this.serviceFormation.modifier(this.f).subscribe
      (
        response=> 
        {this.f=response
          console.log(this.formateur.id)
          this.historique.formateur=this.formateur
          this.historique.formation=this.f
          this.servicehistf.ajouter(this.historique).subscribe()
          this.router.navigateByUrl('GestionFormation')}
      )})
  }

  retour(): void {
    
    this.router.navigateByUrl('GestionFormateur')
  }

}
