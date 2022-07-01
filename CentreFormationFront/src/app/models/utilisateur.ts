export class Utilisateur
{
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    


    constructor (username:string,password:string,nom:string,prenom:string,mail:string){
        this.username=username
        this.password=password
        this.nom=nom
        this.prenom=prenom
        this.mail=mail

    }
}