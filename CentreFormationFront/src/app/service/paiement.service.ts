import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiement } from '../models/paiement';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Paiement[]>('http://localhost:8016/api/paiements')
  }
 
  getById(idPaiement:number)
  {
    return this.http.get<Paiement>('http://localhost:8016/api/paiements/'+idPaiement)
  }

  ajouter(participant:Paiement)
  {
    return this.http.post<Paiement>('http://localhost:8016/api/paiements',participant)
  }

  supprimer(idPaiement:number)
  {
    return this.http.delete('http://localhost:8016/api/paiements/'+idPaiement)
  }

  modifier(formData:FormData)
  {
    return this.http.put<Paiement>('http://localhost:8016/api/paiements', formData)
  }
}
