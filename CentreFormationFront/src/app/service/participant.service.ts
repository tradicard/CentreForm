import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Participant[]>('http://localhost:8016/api/participants')
  }
 
  getById(id:number)
  {
    return this.http.get<Participant>('http://localhost:8016/api/participants/'+id)
  }

  getByUsername(username:string)
  {
    return this.http.get<Participant>('http://localhost:8016/api/participantsus/'+username)
  }

  ajouter(participant:Participant)
  {
    return this.http.post<Participant>('http://localhost:8016/api/participants',participant)
  }

  supprimer(idParticipant:number)
  {
    return this.http.delete('http://localhost:8016/api/participants/'+idParticipant)
  }

  modifier(formData:FormData)
  {
    return this.http.put<Participant>('http://localhost:8016/api/participants', formData)
  }
}
