import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Question[]>('http://localhost:8016/api/questions')
  }
  getAllbyquizz(id:number)
  {
    return this.http.get<Question[]>('http://localhost:8016/api/questionsparquizz/'+id)
  }
 
  getById(idQuestion:number)
  {
    return this.http.get<Question>('http://localhost:8016/api/questions/'+idQuestion)
  }

  ajouter(question:Question)
  {
    return this.http.post<Question>('http://localhost:8016/api/questions',question)
  }

  supprimer(idQuestion:number)
  {
    return this.http.delete('http://localhost:8016/api/questions/'+idQuestion)
  }

  modifier(question:Question)
  {
    return this.http.put<Question>('http://localhost:8016/api/questions', question)
  }
}
