import { Utilisateur } from "./utilisateur";

export class Role
{
    idRole!: number; 
    libRole!:string; 
    description!:string; 

    utilisateurs!:Utilisateur[]

    
}