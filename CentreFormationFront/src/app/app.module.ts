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

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    AjoutFormateurComponent,
    ListeFormateurComponent,
    ModifierFormateurComponent
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
