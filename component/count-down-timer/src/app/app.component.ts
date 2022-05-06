import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timeRemain:string = '01:00';
  isStarted:boolean = false;
  currentTime:number = 0;
  seconds:number = 1;
  minutes:number = 0;
  timerId:any;

  secondsUpdate(event:any)
  {
    const currentVal:number = parseInt(event.target.value);

    if(!isNaN(currentVal))
    {
      this.seconds = parseInt(event.target.value);
    }
  }

  minutesUpdate(event:any)
  {
    const currentVal:number = parseInt(event.target.value);

    if(!isNaN(currentVal))
    {
      this.minutes = parseInt(event.target.value);
    }
  }

  calcTime()
  {
    const min:number = parseInt((this.currentTime / 60).toString());
    const sec:number = parseInt((this.currentTime % 60).toString());

    this.timeRemain = min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');
  }

  startTimer()
  {
    this.currentTime =  this.seconds + this.minutes * 60;
    this.isStarted= true;

    this.timerId = setInterval(()=>{
      if(this.currentTime > 0)
      {
        this.currentTime -=1;
        this.calcTime();
      }
      else
      {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer()
  {
    this.isStarted= false;
    clearInterval(this.timerId);
  }

}
