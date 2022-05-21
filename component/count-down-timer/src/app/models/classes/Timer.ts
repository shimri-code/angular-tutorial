import { EventEmitter } from "@angular/core";
import { ITimer } from "../interfaces/ITimer";

enum TimerState {
    Running,
    Stoped,
  }

export class CountDownTimer implements ITimer
{
    private readonly _onTick: EventEmitter<string>;
    private _timerId:any;
    private _seconds:number;
    private _state:TimerState;

    constructor()
    {
        this._onTick = new EventEmitter<string>();
        this._seconds = 0;
        this._state = TimerState.Stoped;
    }

    get onTick()
    {
        return this._onTick;
    }

    private getTimeString() : string
    {
      return new Date(this._seconds * 1000).toISOString().slice(14, 19);
    }

    start(seconds: number): void {
        if(this._state === TimerState.Stoped)
        {
            this._state = TimerState.Running;
            this._seconds = seconds;

            this._timerId = setInterval(()=>{
                if(this._seconds > 0)
                {
                  this._seconds--;
                  this._onTick.emit(this.getTimeString());
                }
                else
                {
                  this.stop();
                }
              }, 1000);
        }
    }

    stop(): void {
        clearInterval(this._timerId);
        this._state = TimerState.Stoped; 
    }
}
