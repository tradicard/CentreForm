import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterFormationComponent } from './Formation/ajouter-formation/ajouter-formation.component';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './EnsConnection/connection/connection.component';
import { ListeFormationComponent } from './Formation/liste-formation/liste-formation.component';
import { ModifierFormationComponent } from './Formation/modifier-formation/modifier-formation.component';
import { ParticipantsAssociesComponent } from './Formation/participants-associes/participants-associes.component';

const routes: Routes = [
  {path:'Connection',component:ConnectionComponent},

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
