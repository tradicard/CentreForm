import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './EnsConnection/connection/connection.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { InscriptionComponent } from './EnsConnection/inscription/inscription.component';
import { ListeFormationComponent } from './Formation/liste-formation/liste-formation.component';
import { ModifierFormationComponent } from './Formation/modifier-formation/modifier-formation.component';
import { AjouterFormationComponent } from './Formation/ajouter-formation/ajouter-formation.component';
import { ParticipantsAssociesComponent } from './Formation/participants-associes/participants-associes.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    ListeFormationComponent,
    ModifierFormationComponent,
    AjouterFormationComponent,
    ParticipantsAssociesComponent
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
