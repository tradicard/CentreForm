import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-acceuil-all',
  templateUrl: './acceuil-all.component.html',
  styleUrls: ['./acceuil-all.component.css']
})
export class AcceuilAllComponent implements OnInit {
formations!:Formation[]
formations2!:Formation[]
selectedValue!:string
  constructor(private service:FormationService) { }

  ngOnInit(): void {
    this.recuperer()
    this.formations2=[]
  }

  recuperer(){
    this.service.getAll().subscribe(
      response=> this.formations=response
    )
  }
  reset(){
    this.ngOnInit()
  }

  rol(){
    if( this.selectedValue=="free"){
      this.service.getAll().subscribe(
        response=> {this.formations=response
          for(let f of this.formations){
            this.formations2=[]
            if(f.prix===0){
              
              this.formations2.push(f)
            }
        }this.formations=this.formations2}
      )
      
      }
      

    
    if( this.selectedValue=="cent"){
      this.service.getAll().subscribe(
        response=> {this.formations=response
      for(let f of this.formations){
        this.formations2=[]
        if(f.prix<100){
          
          this.formations2.push(f)
        }
      }this.formations=this.formations2
    })
      

    }
    if( this.selectedValue=="cents"){
      this.service.getAll().subscribe(
        response=> {this.formations=response
      console.log("ok")
      this.formations2=[]
      for(let f of this.formations){
        if(f.prix>100){
          console.log(f)
          
          this.formations2.push(f)
        }
      }this.formations=this.formations2
    })
      

    }
  }
}
