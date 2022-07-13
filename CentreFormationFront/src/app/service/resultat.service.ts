import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resultat } from '../models/resultat';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Resultat[]>('http://localhost:8016/api/resultats')
  }
 
  getById(idResultat:number)
  {
    return this.http.get<Resultat>('http://localhost:8016/api/resultats/'+idResultat)
  }

  ajouter(resultat:Resultat)
  {
    return this.http.post<Resultat>('http://localhost:8016/api/resultats',resultat)
  }

  supprimer(idResultat:number)
  {
    return this.http.delete('http://localhost:8016/api/resultats/'+idResultat)
  }

  modifier(resultat:Resultat)
  {
    return this.http.put<Resultat>('http://localhost:8016/api/resultats', resultat)
  }
}
