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
import { HeaderComponent } from './header/header.component';
import { AjouterContactComponent } from './GestionProspect/ajouter-contact/ajouter-contact.component';
import { PaiementComponent } from './GestionPaiement/Participant/paiement/paiement.component';
import { VoirPaiementduParticipantAdminComponent } from './GestionPaiement/Admin/voir-paiementdu-participant-admin/voir-paiementdu-participant-admin.component';
import { AfficherPaiementAdminComponent } from './GestionPaiement/Admin/afficher-paiement-admin/afficher-paiement-admin.component';
import { AfficherPaiementComponent } from './GestionPaiement/Participant/afficher-paiement/afficher-paiement.component';
import { ModifierContactsComponent } from './GestionProspect/modifier-contacts/modifier-contacts.component'

import { DatePipe } from '@angular/common';
import { SingleFormateurFormationsComponent } from './GestionFormateur/single-formateur-formations/single-formateur-formations.component';
import { SingleParticipantFormationsComponent } from './single-participant-formations/single-participant-formations.component';
import { RelancePaiementComponent } from './GestionPaiement/relance-paiement/relance-paiement.component';
import { CrediterCompteComponent } from './GestionPaiement/Participant/crediter-compte/crediter-compte.component';
import { MyDataComponent } from './EnsConnection/my-data/my-data.component';
import { ModifUtilisateurComponent } from './Acceuil/modif-utilisateur/modif-utilisateur.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilAllComponent } from './Acceuil/acceuil-all/acceuil-all.component';


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
    HeaderComponent,
    AjouterContactComponent,
    AfficherPaiementComponent,
    AfficherPaiementAdminComponent,
    VoirPaiementduParticipantAdminComponent,
    PaiementComponent,
    ModifierContactsComponent,
    SingleFormateurFormationsComponent,
    CrediterCompteComponent,
    FooterComponent,
    SingleParticipantFormationsComponent,
    RelancePaiementComponent,
    CrediterCompteComponent,
    MyDataComponent,
    ModifUtilisateurComponent,
    RelancePaiementComponent,
    AcceuilAllComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true},
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
