import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from '../models/assistant';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient, private router:Router) { }

  authenticate(username:string,password:string) {
   
    return this.http.post<any>('http://localhost:8016/authenticate',
    {username,password})
  }
  deconnection (){
    sessionStorage.removeItem('token')
    console.log("plus de token")
    sessionStorage.removeItem('a')
    console.log("plus de a")
    
    sessionStorage.removeItem('u')
    console.log("plus de u")
    sessionStorage.removeItem('f')
    console.log("plus de f")
    sessionStorage.removeItem('c')
    console.log("plus de c")
    sessionStorage.removeItem('p')
    console.log("plus de p")
    this.router.navigateByUrl('Connection')
  }

  getU() {
    return this.http.get<Utilisateur>('http://localhost:8016/api/user')
  }

  inscrire(user:Utilisateur){
    return this.http.post('http://localhost:8016/inscription',user)
  }



  getAllUtilisateurs()
  {
    return this.http.get<Utilisateur[]>('http://localhost:8016/api/utilisateurs')
  }

 
  getById(id:number)
  {
    return this.http.get<Utilisateur>('http://localhost:8016/api/utilisateurs/'+id)
  }

  getByUsername(username:string)
  {
    return this.http.get<Utilisateur>('http://localhost:8016/api/utilisateursus/'+username)
  }

  ajouterUtilisateur(utilisateur:Utilisateur)
  {
    return this.http.post<Utilisateur>('http://localhost:8016/api/utilisateurs',utilisateur)
  }

  supprimerUtilisateur(id:number)
  {
    return this.http.delete('http://localhost:8016/api/utilisateurs/'+id)
  }

  modifierUtilisateur(formData:FormData)
  {
    return this.http.put<Utilisateur>('http://localhost:8016/api/utilisateurs', formData)
  }

}
