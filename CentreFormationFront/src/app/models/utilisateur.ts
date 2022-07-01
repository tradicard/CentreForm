import { Injector } from "@angular/core";
import { RoleService } from "../service/role.service";
import { Role } from "./role";

export class Utilisateur
{
<<<<<<< HEAD
    id!:number
=======
    id!:number;
>>>>>>> 4b0973198736c3b1a5b2e22ed8c70e23393da0a3
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    
    role!: Role;
    


<<<<<<< HEAD
    constructor (id:number,username:string,password:string,nom:string,prenom:string,mail:string){
        this.id=id
=======
    constructor (id:number, username:string,password:string,nom:string,prenom:string,mail:string, role:Role){


        
        this.id=this.id
>>>>>>> 4b0973198736c3b1a5b2e22ed8c70e23393da0a3
        this.username=username
        this.password=password
        this.nom=nom
        this.prenom=prenom
        this.mail=mail
        this.role=role;
    }
}