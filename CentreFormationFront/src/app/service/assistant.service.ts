import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assistant } from '../models/assistant';

@Injectable({
  providedIn: 'root'
})
export class AssistantService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Assistant[]>('http://localhost:8016/api/assistants')
  }
 
  getById(idAssistant:number)
  {
    return this.http.get<Assistant>('http://localhost:8016/api/assistants/'+idAssistant)
  }

  ajouter(commercial:Assistant)
  {
    return this.http.post<Assistant>('http://localhost:8016/api/assistants',commercial)
  }

  supprimer(idAssistant:number)
  {
    return this.http.delete('http://localhost:8016/api/assistants/'+idAssistant)
  }

  modifier(formData:FormData)
  {
    return this.http.put<Assistant>('http://localhost:8016/api/assistants', formData)
  }
}
