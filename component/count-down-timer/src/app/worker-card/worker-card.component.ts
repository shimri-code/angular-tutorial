import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {
  @Input() imgSrc:string ="";
  @Input() name:string ="";
  @Input() jobTitle:string ="";
  @Input() about:string ="";

  @Output() newNameChoice = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ClickedWorker()
  {
    this.newNameChoice.emit(this.name);
  }

}
