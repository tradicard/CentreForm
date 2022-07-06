import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoriqueParticipant } from '../models/historique-participant';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueparticipantService {

  constructor(private http:HttpClient) { }
  getAll()
  {
    return this.http.get<HistoriqueParticipant[]>('http://localhost:8016/api/historiqueparticipants')
  }


 
  getById(idFormateur:number)
  {
    return this.http.get<HistoriqueParticipant>('http://localhost:8016/api/historiqueparticipants/'+idFormateur)
  }

 

  ajouter(formateur:HistoriqueParticipant)
  {
    return this.http.post<HistoriqueParticipant>('http://localhost:8016/api/historiqueparticipants',formateur)
  }

  supprimer(idFormateur:number)
  {
    return this.http.delete('http://localhost:8016/api/historiqueparticipants/'+idFormateur)
  }

  modifier(Formateur:HistoriqueParticipant)
  {
    return this.http.put<HistoriqueParticipant>('http://localhost:8016/api/historiqueparticipants', Formateur)
  }
}
