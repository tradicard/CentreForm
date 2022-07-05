import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './EnsConnection/connection/connection.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { InscriptionComponent } from './EnsConnection/inscription/inscription.component';
import { AjoutFormateurComponent } from './GestionFormateur/ajout-formateur/ajout-formateur.component';
import { ListeFormateurComponent } from './GestionFormateur/liste-formateur/liste-formateur.component';
import { ModifierFormateurComponent } from './GestionFormateur/modifier-formateur/modifier-formateur.component';
import { AcceuilParticipantComponent } from './Acceuil/acceuil-participant/acceuil-participant.component';
import { AcceuilAdminComponent } from './Acceuil/acceuil-admin/acceuil-admin.component';
import { SearchComponent } from './search/search.component';
import { SingleformationComponent } from './singleformation/singleformation.component';
import { ListeFormationComponent } from './Formation/liste-formation/liste-formation.component';
import { ModifierFormationComponent } from './Formation/modifier-formation/modifier-formation.component';
import { AjouterFormationComponent } from './Formation/ajouter-formation/ajouter-formation.component';
import { ParticipantsAssociesComponent } from './Formation/participants-associes/participants-associes.component';
import { ListeProspectComponent } from './GestionProspect/liste-prospect/liste-prospect.component';
import { ModifProspectComponent } from './GestionProspect/modif-prospect/modif-prospect.component';
import { SingleProspectComponent } from './GestionProspect/single-prospect/single-prospect.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
=======
import { ModifierContactComponent } from './GestionProspect/modifier-contact/modifier-contact.component';
import { AjouterContactComponent } from './GestionProspect/ajouter-contact/ajouter-contact.component';
>>>>>>> 591faea4e6a08150466787e6410553fbcafa3ef1

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    AjoutFormateurComponent,
    ListeFormateurComponent,
    ModifierFormateurComponent,
    AcceuilParticipantComponent,
    AcceuilAdminComponent,
    SearchComponent,
    SingleformationComponent,
    ModifierFormateurComponent,
    ListeFormationComponent,
    ModifierFormationComponent,
    AjouterFormationComponent,
    ParticipantsAssociesComponent,
    ListeProspectComponent,
    ModifProspectComponent,
    SingleProspectComponent,
<<<<<<< HEAD
    HeaderComponent,
    FooterComponent
=======
    ModifierContactComponent,
    AjouterContactComponent
>>>>>>> 591faea4e6a08150466787e6410553fbcafa3ef1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
