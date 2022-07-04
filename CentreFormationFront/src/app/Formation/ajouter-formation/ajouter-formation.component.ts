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
  forma!:number

  formateur!:Formateur
  formations!:Formation[]
  participants!:Participant[]

  formateurs!:Formateur[]

  Value!:Formateur

  idF!:number


  constructor(private route:ActivatedRoute,private router:Router, private serviceFormation:FormationService, private serviceForm:FormateurService) { }

  ngOnInit(): void {
    this.chargerLesFormateurs();
    this.f=new Formation()
  }

//utiliser meth service Liste formateurs disponibles, faire pareil pour modifier

  ajouter()
  {
    this.serviceForm.getById(this.forma).subscribe(
      response=>
      {
        this.formateur=response
        this.f.formateur=this.formateur
        this.serviceFormation.ajouter(this.f).subscribe
      (
        response=> 
        {this.router.navigateByUrl('GestionFormation')}
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
   this.router.navigateByUrl('afficherPassports')

*/
  }

  chargerLesFormateurs()
  {
    this.serviceForm.getAll().subscribe(
      response=>this.formateurs=response
    )
   
  }

  retour():void
  {
    this.router.navigateByUrl('GestionFormation')
  }
}
