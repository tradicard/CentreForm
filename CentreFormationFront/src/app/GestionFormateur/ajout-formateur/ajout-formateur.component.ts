import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { Role } from 'src/app/models/role';
import { FormateurService } from 'src/app/service/formateur.service';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-ajout-formateur',
  templateUrl: './ajout-formateur.component.html',
  styleUrls: ['./ajout-formateur.component.css']
})
export class AjoutFormateurComponent implements OnInit {

  formateur!:Formateur
  historiqueFormation!:Formation[]

  roles!:Role[]
  role!:Role
  selectedValue!:number

  forma!:number


  constructor(private service:FormateurService, private router:Router, private serviceRole:RoleService) { }

  ngOnInit(): void {
    this.recupererRoles()
    this.historiqueFormation=[]
    this.formateur=new Formateur ()
  }


  SaveFormateur () {

    
    this.service.ajouter(this.formateur).subscribe(
      response => {
        this.router.navigateByUrl('afficherFormateur')
      }
    )
  }

   ajouter()
  {
    console.log(this.selectedValue)
    this.serviceRole.getById(this.selectedValue).subscribe
    (
      response=>
      {this.role=response
      this.formateur.role=this.role
      
      this.service.ajouter(this.formateur).subscribe(
        response => {
          this.router.navigateByUrl('afficherFormateur')
        }
      )
      }
     
    )


    }
    

  recupererRoles(){
    this.serviceRole.getAll().subscribe
    (
      response=>{this.roles=response}
    )
  }

  retour()
  {
    this.router.navigateByUrl('afficherFormateur')
  }


  }

