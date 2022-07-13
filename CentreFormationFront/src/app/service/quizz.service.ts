import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quizz } from '../models/quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Quizz[]>('http://localhost:8016/api/quizz')
  }
 
  getById(idQuizz:number)
  {
    return this.http.get<Quizz>('http://localhost:8016/api/quizz/'+idQuizz)
  }

  ajouter(quizz:Quizz)
  {
    return this.http.post<Quizz>('http://localhost:8016/api/quizz',quizz)
  }

  supprimer(idQuizz:number)
  {
    return this.http.delete('http://localhost:8016/api/quizz/'+idQuizz)
  }

  modifier(quizz:Quizz)
  {
    return this.http.put<Quizz>('http://localhost:8016/api/quizz', quizz)
  }
}
