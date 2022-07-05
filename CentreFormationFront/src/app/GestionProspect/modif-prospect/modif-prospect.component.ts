import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/models/prospect';
import { ProspectService } from 'src/app/service/prospect.service';

@Component({
  selector: 'app-modif-prospect',
  templateUrl: './modif-prospect.component.html',
  styleUrls: ['./modif-prospect.component.css']
})
export class ModifProspectComponent implements OnInit {


  prospect!:Prospect
  constructor(private serviceProspect:ProspectService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.recupererC()
  }

  SaveProspect () {
    this.serviceProspect.modifier(this.prospect).subscribe(response=>{this.router.navigateByUrl('afficherProspects')})
  }

  recupererC() {
    const idProspect=+this.route.snapshot.params['id']
    this.serviceProspect.getById(idProspect).subscribe(
      response=>this.prospect=response)
  }
}
