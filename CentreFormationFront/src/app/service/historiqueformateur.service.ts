import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoriqueFormateur } from '../models/historique-formateur';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueformateurService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<HistoriqueFormateur[]>('http://localhost:8016/api/historiqueformateurs')
  }


 
  getById(id:number)
  {
    return this.http.get<HistoriqueFormateur>('http://localhost:8016/api/historiqueformateurs/'+id)
  }

 getByIdFormateur(id:number)
 {
  return this.http.get<HistoriqueFormateur[]>('http://localhost:8016/api/historiqueformateursidFormateur/'+id)
 }

  ajouter(formateur:HistoriqueFormateur)
  {
    return this.http.post<HistoriqueFormateur>('http://localhost:8016/api/historiqueformateurs',formateur)
  }

  supprimer(idFormateur:number)
  {
    return this.http.delete('http://localhost:8016/api/historiqueformateurs/'+idFormateur)
  }

  modifier(Formateur:HistoriqueFormateur)
  {
    return this.http.put<HistoriqueFormateur>('http://localhost:8016/api/historiqueformateurs', Formateur)
  }
}
