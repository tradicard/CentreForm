export class Utilisateur
{
    id!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    


    constructor (id:number,username:string,password:string,nom:string,prenom:string,mail:string, role:string){
        this.id=id
        this.username=username
        this.password=password
        this.nom=nom
        this.prenom=prenom
        this.mail=mail

    }
}