import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Relance } from '../models/relance';

@Injectable({
  providedIn: 'root'
})
export class RelanceService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Relance[]>('http://localhost:8016/api/relances')
  }
 
  getById(idRelance:number)
  {
    return this.http.get<Relance>('http://localhost:8016/api/relances/'+idRelance)
  }


  ajouter(relance:Relance)
  {
    return this.http.post<Relance>('http://localhost:8016/api/relances',relance)
  }

  supprimer(idRelance:number)
  {
    return this.http.delete('http://localhost:8016/api/relances/'+idRelance)
  }

  modifier(formData:FormData)
  {
    return this.http.put<Relance>('http://localhost:8016/api/relances', formData)
  }


}
