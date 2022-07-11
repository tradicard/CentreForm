import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/formation';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
formations!:Formation[]
  constructor(private serviceForm:FormationService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.recupForm()
  }

  recupForm(){
    let libform=sessionStorage.getItem('ch')
    console.log(libform)
    this.serviceForm.getBylib(libform!).subscribe(
      response=>{this.formations=response
      }
    )
  }
  retour(){
    this.router.navigateByUrl('Acceuil')
  }

}
