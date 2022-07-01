export class Utilisateur
{
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    dateNaissance!:string;
    


    constructor (username:string,password:string,nom:string,prenom:string,dateNaissance:string){
        this.username=username
        this.password=password
        this.nom=nom
        this.prenom=prenom
        this.dateNaissance=dateNaissance

    }
}