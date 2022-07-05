import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prospect } from '../models/prospect';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Prospect[]>('http://localhost:8016/api/prospects')
  }
 
  getById(idProspect:number)
  {
    return this.http.get<Prospect>('http://localhost:8016/api/prospects/'+idProspect)
  }

  ajouter(prospect:Prospect)
  {
    return this.http.post<Prospect>('http://localhost:8016/api/prospects',prospect)
  }

  supprimer(idProspect:number)
  {
    return this.http.delete('http://localhost:8016/api/prospects/'+idProspect)
  }

  modifier(prospect:Prospect)
  {
    return this.http.put<Prospect>('http://localhost:8016/api/prospects', prospect)
  }
}
