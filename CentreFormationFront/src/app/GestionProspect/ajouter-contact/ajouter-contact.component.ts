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
  contact!:Contact
  selectedOption!:number
  datecontact!:string

  constructor(private serviceContact:ContactService,private serviceProspect:ProspectService,private serviceCommercial:CommercialService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.recupererP()
    this.recupererC()
    this.contact=new Contact()
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
    console.log(this.datecontact)
  }

}
