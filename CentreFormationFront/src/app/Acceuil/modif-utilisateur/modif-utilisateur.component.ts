import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Role } from 'src/app/models/role';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RoleService } from 'src/app/service/role.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-modif-utilisateur',
  templateUrl: './modif-utilisateur.component.html',
  styleUrls: ['./modif-utilisateur.component.css']
})
export class ModifUtilisateurComponent implements OnInit {
  u!:Utilisateur
  formateurs!:Formateur[]


  selectedValue!:number

  constructor(private route:ActivatedRoute,private service:UtilisateurService,private router:Router, private serviceRole:RoleService) { }

  ngOnInit(): void {

    this.recupererC()
  }

  SaveFormateur() {
    this.service.modifierUtilisateur(this.u).subscribe(response=>{this.router.navigateByUrl('AcceuilAdmin')})
  }

  recupererC() {
    const idCategorie=+this.route.snapshot.params['id']
    this.service.getById(idCategorie).subscribe(
      response=>this.u=response)
  }



}
