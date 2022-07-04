import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../../models/formateur';
import { Formation } from '../../models/formation';
import { Participant } from '../../models/participant';
import { FormationService } from '../../service/formation.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private serviceFormation:FormationService) { }

  validLogout=true;

  formations!:Formation[]
  f!:Formation

  formateur!:Formateur
  formateurs!:Formateur []

  participants!:Participant[]




  ngOnInit(): void {
    //Affiche la liste des differentes formations
    this.recupererFormations()
  }



  ajouterFormation(f:Formation)
  {
    //Faire nnouveau component
    
    this.router.navigateByUrl('AjouterFormation')
  }

  participantsAssocies(idFormation:number)
  {
   //Faire nnouveau component
    this.router.navigateByUrl('ParticipantsAssocies/'+idFormation)
  }

  modifier(idFormation:number)
  {
    this.router.navigateByUrl('ModifierFormation/'+idFormation)
  }



  supprimer(idFormation:number)
  {
    this.serviceFormation.supprimer(idFormation).subscribe(
      response=>{
        this.recupererFormations();
      }
    )
  }

  recupererFormations()
  {
    this.serviceFormation.getAll().subscribe(
      response=>{this.formations=response}
    )
  }
 


  retour():void{

    //mettre redirection accueil
    this.router.navigateByUrl('/accueil')
  }

  logout()
  {
      sessionStorage.removeItem('token')
      this.router.navigateByUrl('')
      this.validLogout=true
  
  }

}

