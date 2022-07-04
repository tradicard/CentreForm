import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilAdminComponent } from './Acceuil/acceuil-admin/acceuil-admin.component';
import { AcceuilParticipantComponent } from './Acceuil/acceuil-participant/acceuil-participant.component';
import { AjoutFormateurComponent } from './GestionFormateur/ajout-formateur/ajout-formateur.component';
import { ListeFormateurComponent } from './GestionFormateur/liste-formateur/liste-formateur.component';
import { ModifierFormateurComponent } from './GestionFormateur/modifier-formateur/modifier-formateur.component';

import { SearchComponent } from './search/search.component';
import { SingleformationComponent } from './singleformation/singleformation.component';
import { AjouterFormationComponent } from './Formation/ajouter-formation/ajouter-formation.component';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './EnsConnection/connection/connection.component';
import { ListeFormationComponent } from './Formation/liste-formation/liste-formation.component';
import { ModifierFormationComponent } from './Formation/modifier-formation/modifier-formation.component';
import { ParticipantsAssociesComponent } from './Formation/participants-associes/participants-associes.component';
import { ListeProspectComponent } from './GestionProspect/liste-prospect/liste-prospect.component';

const routes: Routes = [
  {path:'Connection',component:ConnectionComponent},
  {path:'afficherFormateur',component:ListeFormateurComponent},
  {path:'ajouterFormateur',component:AjoutFormateurComponent},
  {path:'modifierFormateur/:id',component:ModifierFormateurComponent},
  {path:'searchformation/:ch',component:SearchComponent},
  {path:'Acceuil',component:AcceuilParticipantComponent},
  {path:'AcceuilAdmin',component:AcceuilAdminComponent},
  {path:'inscriptionformation/:id',component:SingleformationComponent},
  {path:'afficherProspects',component:ListeProspectComponent},
  
  
  
  

  //Formation
  {path:'GestionFormation',component:ListeFormationComponent},
  {path:'AjouterFormation',component:AjouterFormationComponent},
  {path:'ModifierFormation/:idFormation',component:ModifierFormationComponent},
  {path:'ParticipantsAssocies/:idFormation',component:ParticipantsAssociesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
