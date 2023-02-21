import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public name:string = "abc";
  public age:number = 20;
  public isIndian:boolean = true;

  public phone:number = 91;

  submit(){
    alert("submit clicked");
  }

  filter(){
    alert("key pressed in input");
  }

  cancel(){
    alert("mounsed ented in cancel button");
  }


}

