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
}