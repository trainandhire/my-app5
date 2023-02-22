import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent{

  public cartCount:number = 0;

  constructor(private _commonService: CommonService) {

    _commonService.getValue().subscribe(
      (data:any)=>{
        this.cartCount = data;
      }
    )

  }

}
