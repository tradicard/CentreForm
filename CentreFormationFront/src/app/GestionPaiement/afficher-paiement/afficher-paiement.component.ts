import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-afficher-paiement',
  templateUrl: './afficher-paiement.component.html',
  styleUrls: ['./afficher-paiement.component.css']
})
export class AfficherPaiementComponent implements OnInit {

  participant!:Participant

  constructor(private serviceParticipant:ParticipantService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  recupererPaiementpourParticipant () {
    const idParticipant=+this.route.snapshot.params['id']
    this.serviceParticipant.getById(idParticipant).subscribe(
      response=>this.participant=response
    )

  }

}
