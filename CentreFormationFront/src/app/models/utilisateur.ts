import { Role } from "./role";

export class Utilisateur
{
    id!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
<<<<<<< HEAD
    role!:Role
    
=======
    role!: Role; 
>>>>>>> 69851a7b26d1828166f617bb4b2e6cd20fde2814
}