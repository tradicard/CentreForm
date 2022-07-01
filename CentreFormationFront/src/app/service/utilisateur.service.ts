import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient,private router:Router) { }

  authenticate(username:string,password:string) {
   
    return this.http.post<any>('http://localhost:8015/authenticate',
    {username,password})
  }
  deconnection (){
    sessionStorage.removeItem('token')
    this.router.navigateByUrl('Connection')
  }

  getU() {
    return this.http.get<Utilisateur>('http://localhost:8015/api/user')
  }

  inscrire(user:Utilisateur){
    return this.http.post('http://localhost:8015/inscription',user)
  }



  getAllUtilisateurs()
  {
    return this.http.get<Utilisateur[]>('http://localhost:8015/api/utilisateurs')
  }

  supprimerUtilisateur(id:number)
  {
    return this.http.delete('http://localhost:8015/api/utilisateurs/'+id)
  }

}
