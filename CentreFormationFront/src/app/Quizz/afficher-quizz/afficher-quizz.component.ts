import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-afficher-quizz',
  templateUrl: './afficher-quizz.component.html',
  styleUrls: ['./afficher-quizz.component.css']
})
export class AfficherQuizzComponent implements OnInit {

  RQ1!:string
  RQ2_1:boolean=false
  RQ2_2:boolean=false
  RQ2_3:boolean=false
  RQ2_4:boolean=false
  timeLeft: number = 60;
  interval!:any;
  subscribeTimer: any;
  pts:number=0
  question:string="un"

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.startTimer()
  }

  saveQ () {
    
    if (parseInt(this.RQ1) === 1) {
      this.pts=this.pts+1
      console.log(this.pts)
      console.log("q1")
      
    }
    this.question="deux"
    }
    
    saveQ2 () {
      if (this.RQ2_2 && this.RQ2_3 == true) {
        this.pts=this.pts+1
        console.log(this.pts)
        
    }
    this.question="trois"
  }

    saveQuizz() {
      if (confirm("Valider ?")) {
        clearInterval(this.interval);
        sessionStorage.setItem("pts",this.pts.toString())
        this.router.navigateByUrl("resultat")
      }
    }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else if (this.timeLeft === 0){
        this.saveQ()
        
        
      }
    },1000)
  }
}
