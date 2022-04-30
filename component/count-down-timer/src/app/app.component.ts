import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timeRemain = '01:00';
  isStarted = false;

  startTimer()
  {
    console.log("Start Clicked");
    this.isStarted= true;
  }

  stopTimer()
  {
    console.log("Stop Clicked");
    this.isStarted= false;
  }

}
