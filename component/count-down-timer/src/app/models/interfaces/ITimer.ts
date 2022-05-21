import { EventEmitter } from "@angular/core";

export interface ITimer {
    readonly onTick:EventEmitter<string>;
    start(seconds:number):void;
    stop():void;
}