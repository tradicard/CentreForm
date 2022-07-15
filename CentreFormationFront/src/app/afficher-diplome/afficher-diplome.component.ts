import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../service/utilisateur.service';
import { Formation } from '../models/formation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../service/formation.service';
import { ResultatService } from '../service/resultat.service';
import { Resultat } from '../models/resultat';

@Component({
  selector: 'app-afficher-diplome',
  templateUrl: './afficher-diplome.component.html',
  styleUrls: ['./afficher-diplome.component.css']
})
export class AfficherDiplomeComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;


  user!:Utilisateur
  f!:Formation
  pts!:number
  r!:Resultat
  constructor(private route:ActivatedRoute,private router:Router, private serviceFormation:FormationService,
    private serviceResultat:ResultatService) { }

  ngOnInit(): void {
    this.recupere()
    this.recupereF()
  }

  recupere(){
    let uStr = sessionStorage.getItem("u");
    if (uStr) {
      this.user = JSON.parse(uStr) as Utilisateur;
    }
    this.pts=Number(sessionStorage.getItem("pts"))
  }
  recupereF(){
    const id=+this.route.snapshot.params['id']
    this.serviceResultat.getById(id).subscribe
    (
    response=>{this.r=response
      console.log(this.r.reussite)
    }
   
    )
    
  }

  

  

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      console.log(canvas.width)
      let fileHeight = 120;
      let fileWidth = 220;
      
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('l', 'mm', 'a4');     
      let position = 45;
      PDF.addImage(FILEURI, 'PNG',38, position, fileWidth, fileHeight, "alias", "NONE", 0);
      PDF.save('angular-demo.pdf');
    });
  }




/*
implements OnInit {
user!:Utilisateur[]
  constructor(private serviceUt:UtilisateurService) { }

  ngOnInit(): void {
    this.recupere()
  }
recupere(){
  this.serviceUt.getAllUtilisateurs().subscribe(
    response=>this.user=response
  )
}
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
*/
}
