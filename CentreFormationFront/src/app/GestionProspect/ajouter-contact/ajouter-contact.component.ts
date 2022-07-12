import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from 'src/app/models/commercial';
import { Contact } from 'src/app/models/contact';
import { Prospect } from 'src/app/models/prospect';
import { CommercialService } from 'src/app/service/commercial.service';
import { ContactService } from 'src/app/service/contact.service';
import { ProspectService } from 'src/app/service/prospect.service';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact.component.html',
  styleUrls: ['./ajouter-contact.component.css']
})
export class AjouterContactComponent implements OnInit {
  prospect!:Prospect
  commercials!:Commercial[]
  com!:Commercial
  contact!:Contact
  selectedOption!:number
  datecontact!:Date
  datec!:string

  constructor(private serviceContact:ContactService,private serviceProspect:ProspectService,private serviceCommercial:CommercialService,
    private route:ActivatedRoute,private router:Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.recupererP()
    this.recupererC()
    this.contact=new Contact()
    this.datecontact=new Date()
  }

  recupererP () {
    const idProspect=+this.route.snapshot.params['id']
    this.serviceProspect.getById(idProspect).subscribe(
      response=>this.prospect=response
    )
  }
  recupererC () {

    this.serviceCommercial.getAll().subscribe(
      response=>this.commercials=response
    )
  }

  SaveContact() {
    const idProspect=+this.route.snapshot.params['id']
  let latest_date =this.datepipe.transform(this.datecontact, 'M/d/yy, h:mm a');
  this.datec=latest_date!
  console.log(this.datec)
  this.contact.dateContact=this.datec
  this.contact.prospect=this.prospect
  this.serviceCommercial.getById(this.selectedOption).subscribe(
    response=>{
      this.com=response
      this.contact.commercial=this.com
      this.serviceContact.ajouter(this.contact).subscribe(
        response=> {this.router.navigateByUrl('contactduProspect/'+idProspect)
        console.log("avant envoi")
        this.serviceContact.sendemail(this.contact).subscribe(
          response=>this.serviceContact.sendscheduledemail(this.contact).subscribe(
            response=>console.log("c'est fait")
          )
        )
        
      }
      )
    }
  )

  }
  retour(){
    this.router.navigateByUrl('afficherProspects')
  }

}
