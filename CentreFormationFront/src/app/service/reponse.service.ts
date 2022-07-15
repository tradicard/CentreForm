import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reponse } from '../models/reponse';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Reponse[]>('http://localhost:8016/api/reponses')
  }
  getAllbyquest(id:number)
  {
    return this.http.get<Reponse[]>('http://localhost:8016/api/reponsesparquest/'+id)
  }
  
  getById(idReponse:number)
  {
    return this.http.get<Reponse>('http://localhost:8016/api/reponses/'+idReponse)
  }

  ajouter(reponse:Reponse)
  {
    return this.http.post<Reponse>('http://localhost:8016/api/reponses',reponse)
  }

  supprimer(idReponse:number)
  {
    return this.http.delete('http://localhost:8016/api/reponses/'+idReponse)
  }

  modifier(reponse:Reponse)
  {
    return this.http.put<Reponse>('http://localhost:8016/api/reponses', reponse)
  }
}
