import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from '../models/commercial';
import { Contact } from '../models/contact';
import { Prospect } from '../models/prospect';
import { CommercialService } from '../service/commercial.service';
import { ContactService } from '../service/contact.service';
import { ProspectService } from '../service/prospect.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
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
