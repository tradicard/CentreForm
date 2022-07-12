import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Role } from 'src/app/models/role';
import { FormateurService } from 'src/app/service/formateur.service';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-modifier-formateur',
  templateUrl: './modifier-formateur.component.html',
  styleUrls: ['./modifier-formateur.component.css']
})
export class ModifierFormateurComponent implements OnInit {

  formateur!:Formateur
  formateurs!:Formateur[]
  roles!:Role[]
  role!:Role

  selectedValue!:number

  constructor(private route:ActivatedRoute,private service:FormateurService,private router:Router, private serviceRole:RoleService) { }

  ngOnInit(): void {
    this.recupererRoles()
    this.recupererC()
  }

  SaveFormateur() {
    
    this.serviceRole.getById(this.selectedValue).subscribe
    (
      response=>
      {
        this.role=response
        this.formateur.role=this.role
        
        this.service.modifier(this.formateur).subscribe(
          response=>
          {this.router.navigateByUrl('afficherFormateur')})
      }
    )
    
    this.service.modifier(this.formateur).subscribe(response=>{this.router.navigateByUrl('afficherFormateur')})
  }

  recupererC() {
    const idCategorie=+this.route.snapshot.params['id']
    this.service.getById(idCategorie).subscribe(
      response=>this.formateur=response)
  }

  recupererRoles(){
    this.serviceRole.getAll().subscribe
    (
      response=>{this.roles=response}
    )
  }

}
