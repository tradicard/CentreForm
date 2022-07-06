import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from 'src/app/models/commercial';
import { Contact } from 'src/app/models/contact';
import { CommercialService } from 'src/app/service/commercial.service';
import { ContactService } from 'src/app/service/contact.service';
import { ProspectService } from 'src/app/service/prospect.service';

@Component({
  selector: 'app-modifier-contacts',
  templateUrl: './modifier-contacts.component.html',
  styleUrls: ['./modifier-contacts.component.css']
})
export class ModifierContactsComponent implements OnInit {

  contact!:Contact
  datecontact!:string
  selectedValue!:number
  idp!:number

  c!:Commercial
  commercials!:Commercial[]

  constructor(private router:Router, private route:ActivatedRoute, private serviceProsp:ProspectService, private servicecont:ContactService, private serviceCom:CommercialService) { }

  ngOnInit(): void {
    //recup idContact a modif->recup contact 
   
    this.recuperercontact()
    this.recupererCommercials()
   
  }

  recuperercontact()
  {
    const id=+this.route.snapshot.params['id']
    this.servicecont.getById(id).subscribe
    (
      response=>
      {this.contact=response}
    )
  }

  recupererCommercials()
  {
    this.serviceCom.getAll().subscribe
    (
      response=>this.commercials=response
    )
  }

  ModifContact()
  {
    this.serviceCom.getById(this.selectedValue).subscribe
    (
      response=>
      {
        this.c=response
        this.contact.commercial=this.c

    this.servicecont.modifier(this.contact).subscribe
    (
      response=>
      this.router.navigateByUrl('afficherProspects')
    )
  }
  )
}
}
