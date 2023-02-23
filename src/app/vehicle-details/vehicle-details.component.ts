import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  public vehicle:Vehicle = <Vehicle>{};

  constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService) {

    this._activatedRoute.params.subscribe(
      (data:any)=>{

        this._vehicleService.getVehicleDetails(data.id).subscribe(
          (data:Vehicle)=>{
            this.vehicle = data;
          }
        )
        
      }
    )

  }

  ngOnInit(): void {
  }

}
