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
    role!: Role; 
=======
    
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
>>>>>>> branch2
}