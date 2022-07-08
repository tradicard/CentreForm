import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Contact[]>('http://localhost:8016/api/contacts')
  }
 
  getById(idContact:number)
  {
    return this.http.get<Contact>('http://localhost:8016/api/contacts/'+idContact)
  }

  getByProspect(idProspect:number) 
  {
    return this.http.get<Contact[]>('http://localhost:8016/api/contactsnom/'+idProspect)
  }

  ajouter(contact:Contact)
  {
    return this.http.post<Contact>('http://localhost:8016/api/contacts',contact)
  }

  sendemail(c:Contact)
  {
    return this.http.post<any>('http://localhost:8016/sendSimpleEmail',c)
  }
  sendscheduledemail(c:Contact)
  {
    return this.http.post<any>('http://localhost:8016/GiveScheduleEmailRequest',c)
  }

  

  supprimer(idContact:number)
  {
    return this.http.delete('http://localhost:8016/api/contacts/'+idContact)
  }

  modifier(contact:Contact)
  {
    return this.http.put<Contact>('http://localhost:8016/api/contacts', contact)
  }
}
