import { Participant } from "./participant"

export class Paiement
{
    idPaiement!:number
    dateFacture!:string
    montant!:number
    reste!:number

    participant!:Participant
    dateDernierPaiement!:string
	dateProchainPaiement!:string
   
}