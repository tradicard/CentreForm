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
import { ModifProspectComponent } from './GestionProspect/modif-prospect/modif-prospect.component';
import { SingleProspectComponent } from './GestionProspect/single-prospect/single-prospect.component';

import { AjouterContactComponent } from './GestionProspect/ajouter-contact/ajouter-contact.component';
import { VoirPaiementduParticipantAdminComponent } from './GestionPaiement/Admin/voir-paiementdu-participant-admin/voir-paiementdu-participant-admin.component';
import { AfficherPaiementAdminComponent } from './GestionPaiement/Admin/afficher-paiement-admin/afficher-paiement-admin.component';
import { AfficherPaiementComponent } from './GestionPaiement/Participant/afficher-paiement/afficher-paiement.component';
import { PaiementComponent } from './GestionPaiement/Participant/paiement/paiement.component';
import { ModifierContactsComponent } from './GestionProspect/modifier-contacts/modifier-contacts.component';
import { SingleFormateurFormationsComponent } from './GestionFormateur/single-formateur-formations/single-formateur-formations.component';
import { SingleParticipantFormationsComponent } from './single-participant-formations/single-participant-formations.component';
import { RelancePaiementComponent } from './GestionPaiement/relance-paiement/relance-paiement.component';
import { CrediterCompteComponent } from './GestionPaiement/Participant/crediter-compte/crediter-compte.component';
import { HeaderComponent } from './header/header.component';
import { InscriptionComponent } from './EnsConnection/inscription/inscription.component';
import { ModifUtilisateurComponent } from './Acceuil/modif-utilisateur/modif-utilisateur.component';
import { MyDataComponent } from './EnsConnection/my-data/my-data.component';
import { AcceuilAllComponent } from './Acceuil/acceuil-all/acceuil-all.component';
import { AfficherDiplomeComponent } from './afficher-diplome/afficher-diplome.component';
import { QuizComponent } from './quiz/quiz.component';
import { AfficherQuizzComponent } from './Quizz/afficher-quizz/afficher-quizz.component';
import { ResultatComponent } from './Quizz/resultat/resultat.component';
import { CreationQuizzComponent } from './Quizz/Formateur/creation-quizz/creation-quizz.component';
import { CreationQuestionComponent } from './Quizz/creation-question/creation-question.component';
import { TestComponent } from './test/test.component';
import { CorrectionComponent } from './Quizz/correction/correction.component';

const routes: Routes = [
  {path:'Connection',component:ConnectionComponent},
  {path:'',component:AcceuilAllComponent},
  {path:'afficherFormateur',component:ListeFormateurComponent},
  {path:'ajouterFormateur',component:AjoutFormateurComponent},
  {path:'modifierFormateur/:id',component:ModifierFormateurComponent},
  {path:'formationsDuFormateur/:id',component:SingleFormateurFormationsComponent},
  {path:'searchformation',component:SearchComponent},
  {path:'Acceuil',component:AcceuilParticipantComponent},
  {path:'AcceuilAdmin',component:AcceuilAdminComponent},
  {path:'inscriptionformation/:id',component:SingleformationComponent},
  {path:'inscriptionParticipant',component:InscriptionComponent},
  {path:'MyData',component:MyDataComponent},
  {path:'formationsDuParticipant/:id',component:SingleParticipantFormationsComponent},

  {path:'modifierUtilisateur/:id',component:ModifUtilisateurComponent},
  {path:'affichediplome/:id',component:AfficherDiplomeComponent},
  
  //Prospect
  {path:'afficherProspects',component:ListeProspectComponent},
  {path:'modifierProspect/:id',component:ModifProspectComponent},
  {path:'contactduProspect/:id',component:SingleProspectComponent},
  {path:'modifierContact/:id',component:ModifierContactsComponent},
  {path:'ajouterContact/:id',component:AjouterContactComponent},

  //Formation
  {path:'GestionFormation',component:ListeFormationComponent},
  {path:'AjouterFormation',component:AjouterFormationComponent},
  {path:'ModifierFormation/:idFormation',component:ModifierFormationComponent},
  {path:'ParticipantsAssocies/:idFormation',component:ParticipantsAssociesComponent},

  //Paiement
  {path:'afficherPaiementAdmin',component:AfficherPaiementAdminComponent},
  {path:'PaiementParticipantAdmin/:id',component:VoirPaiementduParticipantAdminComponent},
  {path:'PaiementParticipant',component:AfficherPaiementComponent},
  {path:'Paiement/:id',component:PaiementComponent},
  {path:'CrediterCompte',component:CrediterCompteComponent},
  {path:'GestionFormateur',component:ListeFormateurComponent},

  {path:'RelancePaiement/:id',component:RelancePaiementComponent},

  {path:'quizTest',component:QuizComponent},

  
  {path:'creerQuizz',component:CreationQuizzComponent},
  {path:'creerQuestion/:id',component:CreationQuestionComponent},
  {path:'test/:id',component:TestComponent},
  {path:'correction/:id',component:CorrectionComponent},


  {path:'afficherQuizz/:id',component:AfficherQuizzComponent},
  {path:'resultat/:id',component:ResultatComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
