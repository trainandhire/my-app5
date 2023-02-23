import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  // public user:any = {name:'asdf',age:90}

  public number1:number = 0;
  public number2:number = 0;
  public result:number = 0;

  sum(){
    this.result = this.number1 + this.number2;
  }

  sub(){
    this.result = this.number1 - this.number2;
  }


}
