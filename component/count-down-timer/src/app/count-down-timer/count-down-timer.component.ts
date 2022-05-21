import { Component } from '@angular/core';
import { CountDownTimer } from '../models/classes/Timer';
import { ITimer } from '../models/interfaces/ITimer';

@Component({
  selector: 'count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent{

  timeRemain:string = '00:00';
  seconds:number = 0;
  timeToCountInSeconds:number = 0;
  minutes:number = 0;
  timer:ITimer;

  constructor()
  {
    this.timer = new CountDownTimer();
    this.timer.onTick.subscribe((time:string) => { this.timeRemain = time; });
  }

  startTimer()
  {
    this.timeToCountInSeconds = this.seconds + (this.minutes * 60);
    this.timer.start(this.timeToCountInSeconds);
  }

  stopTimer()
  {
    this.timer.stop();
  }

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
}
