import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {

  public today:any = new Date();

  public user:any = {name:'Abc',age:20};

  public names:string[] = ['abc','john','smith'];

  public states:string[] = ['Telangana',"andhra",'Tamilnadu'];

  public users:any = [
      {name:'abc',age:20},
      {name:'def',age:30}
    ];
  
  public students:any = [
    {name:'Anil',sub:'math',marks:80},
    {name:'Bharath',sub:'science',marks:20},
    {name:'Chaitanya',sub:'english',marks:100},
    {name:'Anil',sub:'math',marks:24},
    {name:'Bharath',sub:'science',marks:40},
    {name:'Chaitanya',sub:'english',marks:23}
  ];

  public products:any=[
    {name:'pen',price:10,rating:4},
    {name:'shirt',price:1000,rating:4.3},
    {name:'phone',price:5000,rating:2},
    {name:'laptop',price:30000,rating:5},
  ]

  public time:number = 0;


}
