import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commercial } from '../models/commercial';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Commercial[]>('http://localhost:8016/api/commercials')
  }
 
  getById(idCommercial:number)
  {
    return this.http.get<Commercial>('http://localhost:8016/api/commercials/'+idCommercial)
  }

  getByUsername(username:string)
  {
    return this.http.get<Commercial>('http://localhost:8016/api/commercialsus/'+username)
  }

  ajouter(commercial:Commercial)
  {
    return this.http.post<Commercial>('http://localhost:8016/api/commercials',commercial)
  }

  supprimer(idCommercial:number)
  {
    return this.http.delete('http://localhost:8016/api/commercials/'+idCommercial)
  }

  modifier(formData:FormData)
  {
    return this.http.put<Commercial>('http://localhost:8016/api/commercials', formData)
  }
}
