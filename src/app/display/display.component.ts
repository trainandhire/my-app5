import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  @Input() public result:number = 0;

  @Output() public resetEvent: EventEmitter<any> = new EventEmitter();

  reset(){
    this.resetEvent.emit();
  }

}
