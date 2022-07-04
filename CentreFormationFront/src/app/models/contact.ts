import { Commercial } from "./commercial"
import { Prospect } from "./prospect"

export class Contact
{
    idContact!:number
    dateContact!:string
    
    prospect!:Prospect

    commercial!:Commercial

}