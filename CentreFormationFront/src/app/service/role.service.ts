import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Role[]>('http://localhost:8016/api/roles')
  }
 
  getById(idRole:number)
  {
    return this.http.get<Role>('http://localhost:8016/api/roles/'+idRole)
  }
  getByLibRole(librole:string)
  {
    return this.http.get<Role>('http://localhost:8016/api/rolesBylib/'+librole)
  }




  ajouter(role:Role)
  {
    return this.http.post<Role>('http://localhost:8016/api/roles',role)
  }

  supprimer(idRole:number)
  {
    return this.http.delete('http://localhost:8016/api/roles/'+idRole)
  }

  modifier(formData:FormData)
  {
    return this.http.put<Role>('http://localhost:8016/api/roles', formData)
  }

}
