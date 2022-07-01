import { Participant } from "./participant"

export class Paiement
{
    idPaiement!:number
    datePaiement!:string
    montant!:number
    reste!:number

    participant!:Participant

    constructor(idPaiement:number, datePaiement:string, montant:number, reste:number)
    {
        this.idPaiement=idPaiement
        this.datePaiement=datePaiement
        this.montant=montant
        this.reste=reste
    }
}