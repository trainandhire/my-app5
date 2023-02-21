import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

    public count:number = 0;

    add(){
      this.count = this.count + 1;
    }

    catch(){
      this.count = 0;
    }

}
