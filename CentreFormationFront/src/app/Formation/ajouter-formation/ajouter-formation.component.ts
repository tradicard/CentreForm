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
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {

  f!:Formation;
  forma!:number

  formateur!:Formateur
  formations!:Formation[]
  participants!:Participant[]
  datedebu!:Date
  dated!:string
  datefin!:Date
  datef!:string
  formateurs!:Formateur[]
  historique!:HistoriqueFormateur
  Value!:Formateur

  idF!:number


  constructor(private route:ActivatedRoute,private router:Router, private serviceFormation:FormationService, private serviceForm:FormateurService,
    private datepipe:DatePipe, private servicehistf:HistoriqueformateurService) { }

  ngOnInit(): void {
    this.chargerLesFormateurs();
    this.f=new Formation()
    this.historique=new HistoriqueFormateur()
  }

//utiliser meth service Liste formateurs disponibles, faire pareil pour modifier

  ajouter()
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
        this.serviceFormation.ajouter(this.f).subscribe
      (
        response=> 
        {this.f=response
          console.log(this.formateur.id)
          this.historique.formateur=this.formateur
          this.historique.formation=this.f
          this.servicehistf.ajouter(this.historique).subscribe()
          this.router.navigateByUrl('GestionFormation')}
      )}
      
    )
    
   
   
   
   /* let value=(<HTMLSelectElement>document.getElementById('id')).value
    this.idF=+value
   
    this.serviceForm.getById(this.idF).subscribe
    (
     response=>{
       this.Value=response
     }
    )

   this.Value.historiqueFormation=this.forma
   this.serviceForm.modifier(this.forma)
   
   this.serviceFormation.ajouter(this.f).subscribe()
   this.router.navigateByUrl('GestionFormation')

*/
  }

  chargerLesFormateurs()
  {
    this.serviceForm.getAllLibre().subscribe(
      response=>this.formateurs=response
    )
   
  }

  retour():void
  {
    this.router.navigateByUrl('GestionFormation')
  }
}
