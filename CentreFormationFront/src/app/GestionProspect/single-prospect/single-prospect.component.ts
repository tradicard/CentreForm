import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { Prospect } from 'src/app/models/prospect';
import { ContactService } from 'src/app/service/contact.service';
import { ProspectService } from 'src/app/service/prospect.service';

@Component({
  selector: 'app-single-prospect',
  templateUrl: './single-prospect.component.html',
  styleUrls: ['./single-prospect.component.css']
})
export class SingleProspectComponent implements OnInit {

  contacts!:Contact[]
  prospect!:Prospect

  constructor(private serviceProspect:ProspectService,private serviceContact:ContactService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recuperer()
    this.recupererP()
  }


  recupererP() {
    const idProspect=+this.route.snapshot.params['id']
    this.serviceProspect.getById(idProspect).subscribe(
      response=>this.prospect=response
    )
  }

  recuperer(){
    const idProspect=+this.route.snapshot.params['id']
    this.serviceContact.getByProspect(idProspect).subscribe(
      response=>this.contacts=response)

  }

  supp (idContact:number) {
    this.serviceContact.supprimer(idContact).subscribe(
      response=>this.recuperer())
  }

  modif(idContact:number) {
    this.router.navigateByUrl('modifierContact/'+idContact)
  }

  ajoutRDV () {
    this.router.navigateByUrl('modifierContact/'+this.prospect.idProspect)
  }
}
