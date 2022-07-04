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
    


    constructor (id:number,username:string,password:string,nom:string,prenom:string,mail:string, role:string){
        this.id=id
        this.username=username
        this.password=password
        this.nom=nom
        this.prenom=prenom
        this.mail=mail

    }
>>>>>>> f41c404678bcc5999a6375dc040027c5484482d1
}