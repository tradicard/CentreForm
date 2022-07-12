import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriqueParticipant } from '../models/historique-participant';
import { Participant } from '../models/participant';
import { HistoriqueparticipantService } from '../service/historiqueparticipant.service';

import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-single-participant-formations',
  templateUrl: './single-participant-formations.component.html',
  styleUrls: ['./single-participant-formations.component.css']
})
export class SingleParticipantFormationsComponent implements OnInit {

  participant!:Participant

  historique!:HistoriqueParticipant[]

  constructor(private route:ActivatedRoute, private router:Router, private servicePart:ParticipantService, 
   private serviceHist:HistoriqueparticipantService) { }

  ngOnInit(): void {

    this.recupererLeParticipant()
    this.recupererSesFormations()
  }

  recupererLeParticipant()
  {
    const idParticipant=this.route.snapshot.params['id']
    this.servicePart.getById(idParticipant).subscribe
    (
      response=> 
      {
      this.participant=response
      }
    )
  }

  recupererSesFormations()
  {
    const idParticipant=this.route.snapshot.params['id']
    this.serviceHist.getByIdParticipant(idParticipant).subscribe
    (
      response=>
      {
        this.historique=response
      }
    )
  }

  retour(): void {
    
    // Faire redirection gestion participant
    //this.router.navigateByUrl('GestionParticpant')
  }

}
