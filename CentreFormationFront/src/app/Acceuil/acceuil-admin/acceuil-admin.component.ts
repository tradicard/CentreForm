import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil-admin',
  templateUrl: './acceuil-admin.component.html',
  styleUrls: ['./acceuil-admin.component.css']
})
export class AcceuilAdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gestionformation(){
    this.router.navigateByUrl('GestionFormation')
  }
  gestionformateur(){
    this.router.navigateByUrl('afficherFormateur')
  }
  
}
