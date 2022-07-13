import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  pts!:number
  constructor() { }

  ngOnInit(): void {
    this.pts=Number(sessionStorage.getItem("pts"))
  }

}
