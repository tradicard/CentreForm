import { Formation } from "./formation";

export class Formateur {

    id!:number
    historiqueFormation!:Formation[]
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    


    constructor (id:number,historiqueFormation:Formation[],username:string,password:string,nom:string,prenom:string,mail:string){
        this.id=id
        this.historiqueFormation=historiqueFormation
        this.username=username
        this.password=password
        this.nom=nom
        this.prenom=prenom
        this.mail=mail

    }

}
