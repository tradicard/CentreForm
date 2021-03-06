import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../models/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Formateur[]>('http://localhost:8016/api/formateurss')
  }

  getAllLibre()
  {
    return this.http.get<Formateur[]>('http://localhost:8016/api/formateurssansformation')
  }
 
  getById(idFormateur:number)
  {
    return this.http.get<Formateur>('http://localhost:8016/api/formateurs/'+idFormateur)
  }

  getByUsername(username:string)
  {
    return this.http.get<Formateur>('http://localhost:8016/api/formateursus/'+username)
  }

  ajouter(formateur:Formateur)
  {
    return this.http.post<Formateur>('http://localhost:8016/api/formateurs',formateur)
  }

  supprimer(idFormateur:number)
  {
    return this.http.delete('http://localhost:8016/api/formateurs/'+idFormateur)
  }

  modifier(Formateur:Formateur)
  {
    return this.http.put<Formateur>('http://localhost:8016/api/formateurs', Formateur)
  }
}
