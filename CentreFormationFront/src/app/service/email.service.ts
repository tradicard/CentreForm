import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Relance } from '../models/relance';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  sendSimpleEmail(relance:Relance)
  {
    return this.http.post<any>('http://localhost:8016/sendSimpleEmailRelancePaiement', relance)
  }
}
