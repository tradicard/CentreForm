import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { Prospect } from 'src/app/models/prospect';
import { ContactService } from 'src/app/service/contact.service';
import { ProspectService } from 'src/app/service/prospect.service';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact.component.html',
  styleUrls: ['./ajouter-contact.component.css']
})
export class AjouterContactComponent implements OnInit {

  prospect!:Prospect

  contact!:Contact

  constructor(private serviceContact:ContactService,private serviceProspect:ProspectService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.recupererP()
  }

  recupererP () {
    const idProspect=+this.route.snapshot.params['id']
    this.serviceProspect.getById(idProspect).subscribe(
      response=>this.prospect=response
    )
  }

  SaveContact() {
    
  }
}
