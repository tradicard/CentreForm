import { Injector } from "@angular/core";
import { RoleService } from "../service/role.service";
import { Role } from "./role";

export class Utilisateur
{
    id!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    
    role!: Role;
    


    constructor (id:number,username:string,password:string,nom:string,prenom:string,mail:string){
        this.id=id
        this.username=username
        this.password=password
        this.nom=nom
        this.prenom=prenom
        this.mail=mail
        this.role=role;
    }
}