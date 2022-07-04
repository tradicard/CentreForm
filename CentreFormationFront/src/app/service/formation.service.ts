import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Formation[]>('http://localhost:8016/api/formations')
  }
 
  getById(idFormation:number)
  {
    return this.http.get<Formation>('http://localhost:8016/api/formations/'+idFormation)
  }

  ajouter(formation:Formation)
  {
    return this.http.post<Formation>('http://localhost:8016/api/formations',formation)
  }

  supprimer(idFormation:number)
  {
    return this.http.delete('http://localhost:8016/api/formations/'+idFormation)
  }

  modifier(formation:Formation)
  {
    return this.http.put<Formation>('http://localhost:8016/api/formations', formation)
  }
}
