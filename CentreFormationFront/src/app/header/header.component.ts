import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token:string|null=sessionStorage.getItem('token')

  constructor(private router:Router,private service:UtilisateurService) { }

  ngOnInit(): void {
  }

  deconnection (){
    this.service.deconnection()
      console.log("deco reussi")
      
  }

  versconnection() {
    this.router.navigateByUrl('Connection')

  }
  
  
  retourPP () {
    this.router.navigateByUrl('Acceuil')
  }
}
