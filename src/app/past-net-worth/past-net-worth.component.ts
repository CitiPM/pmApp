import { Component, OnInit, NgModule } from '@angular/core';
import { MrktService } from 'src/services/mrkt.service';

@Component({
  selector: 'app-past-net-worth',
  templateUrl: './past-net-worth.component.html',
  styleUrls: ['./past-net-worth.component.css']
})
export class PastNetWorthComponent implements OnInit {

  constructor(private mrktService: MrktService) { }

  ngOnInit(): void {
    this.makeCNWCall();
  }

  map: any = {};
  networth : number = 0.0;
  currnetworth : number = 0.0;
  investVal: number = 0.0;
  cashVal: number = 0.0
  pastTime : string = "Last Week"

  makePNWCall(){
    this.mrktService.getPNWData(this.pastTime)
      .subscribe( (data:any)=>{
        this.networth = data;
      } )
  }

  makeCNWCall(){
    this.mrktService.getCNWData()
      .subscribe( (data:any)=>{
        this.map =  Object.entries(data);
        console.log(data);
      } )
  }

}
