import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { HistoriqueFormateur } from 'src/app/models/historique-formateur';
import { FormateurService } from 'src/app/service/formateur.service';
import { FormationService } from 'src/app/service/formation.service';
import { HistoriqueformateurService } from 'src/app/service/historiqueformateur.service';

@Component({
  selector: 'app-single-formateur-formations',
  templateUrl: './single-formateur-formations.component.html',
  styleUrls: ['./single-formateur-formations.component.css']
})
export class SingleFormateurFormationsComponent implements OnInit {

  formateur!:Formateur
  formation!:Formation
  formations!:Formation[]
  listeFormations!:Formation[]

  h!:HistoriqueFormateur
  historique!:HistoriqueFormateur[]

  idFormateur!:number

  constructor(private route:ActivatedRoute,private service:FormateurService, private router:Router, 
    private serviceFormation:FormationService,
    private serviceHistoForm:HistoriqueformateurService) { }

  ngOnInit(): void {

//Recup formateur avec son id
   this.RecupererLeFormateur()
   //Recup historique formation en fonction de l'id formateur
   this.RecupererSesFormations()
   this.Recupererformations()
   
   // this.formationsAssociees(this.idF)
  }

 

/*   formationsAssociees(id:number)
  {
    
    const idF=this.route.snapshot.params['id']
    this.service.getById(idF).subscribe
    (
      response=> 
      {this.formateur=response

      //Recup historique formation en fonction de l'id formateur
      this.serviceHistoForm.getByIdFormateur(this.idF)
    (
      response=>
      this.formateur.historique
    )
  }
    )
    
  } */
  Recupererformations()
  {
 
    this.serviceFormation.getAll().subscribe
    (
      response=> 
      {
        this.formations=response
      }
    )
  }

  RecupererLeFormateur()
  {
    const idFormateur=this.route.snapshot.params['id']
    this.service.getById(idFormateur).subscribe
    (
      response=> 
      {
        this.formateur=response
      }
    )
  }

  RecupererSesFormations()
  {
    const idFormateur=this.route.snapshot.params['id']
    this.serviceHistoForm.getByIdFormateur(idFormateur).subscribe
    (
      response=>
      {
        this.historique=response
      }
    )
  }
  participantsAssocies(idFormation:number)
  {
   //Faire nnouveau component
    this.router.navigateByUrl('ParticipantsAssocies/'+idFormation)
  }
  crerquizz(){
    this.router.navigateByUrl('creerQuizz')
  }


  retour(): void {
    
    this.router.navigateByUrl('GestionFormateur')
  }
}
