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

  ajouter(contact:Contact)
  {
    return this.http.post<Contact>('http://localhost:8016/api/contacts',contact)
  }

  supprimer(idContact:number)
  {
    return this.http.delete('http://localhost:8016/api/contacts/'+idContact)
  }

  modifier(formData:FormData)
  {
    return this.http.put<Contact>('http://localhost:8016/api/contacts', formData)
  }
}
