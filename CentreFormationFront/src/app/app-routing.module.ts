import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './EnsConnection/connection/connection.component';
import { AjoutFormateurComponent } from './GestionFormateur/ajout-formateur/ajout-formateur.component';
import { ListeFormateurComponent } from './GestionFormateur/liste-formateur/liste-formateur.component';
import { ModifierFormateurComponent } from './GestionFormateur/modifier-formateur/modifier-formateur.component';

import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'Connection',component:ConnectionComponent},
  {path:'afficherFormateur',component:ListeFormateurComponent},
  {path:'ajouterFormateur',component:AjoutFormateurComponent},
  {path:'modifierFormateur/:id',component:ModifierFormateurComponent},
  {path:'searchformation/:ch',component:SearchComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
