import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ParticipantService } from 'src/app/service/participant.service';

@Component({
  selector: 'app-participants-associes',
  templateUrl: './participants-associes.component.html',
  styleUrls: ['./participants-associes.component.css']
})
export class ParticipantsAssociesComponent implements OnInit {

  @Input() u!:Utilisateur

  idFormation!:number

  f!:Formation

  constructor(private router:Router, private route:ActivatedRoute, private serviceParticipant:ParticipantService) { }

  ngOnInit(): void {
    this.ParticipantsAssocies(this.idFormation)
  }

  ParticipantsAssocies(idFormation:number)
  {
    const id=this.route.snapshot.params['idFormation']
    
  }


  retour():void
  {
    this.router.navigateByUrl('/Acceuil')
 
    
  }
}
