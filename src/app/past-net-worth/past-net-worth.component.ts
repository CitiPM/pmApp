import { Component, OnInit, NgModule } from '@angular/core';
import { MrktService } from 'src/services/mrkt.service';
//import { AppModule } from '../app.module';

// @NgModule({
//   declarations: [
//       // PastNetWorthComponent,
//       // Example2ndComponent,
//       // Example3rdComponent
//   ],
//   imports: [

//     AppModule // <--- this Imports the source module, with its exports
//   ], 
//   // exports: [
//   //     SecondPage,
//   // ]
//   })

@Component({
  selector: 'app-past-net-worth',
  templateUrl: './past-net-worth.component.html',
  styleUrls: ['./past-net-worth.component.css']
})
export class PastNetWorthComponent implements OnInit {

  constructor(private mrktService: MrktService) { }

  ngOnInit(): void {
  }

  map: any = {};
  // networth : number = 0.0;
  networth: string = "$0.00"
  currnetworth : number = 0.0;
  investVal: number = 0.0;
  cashVal: number = 0.0
  pastTime : string = "Last Week"

  makePNWCall(){
    console.log("clicked")
    this.mrktService.getPNWData(this.pastTime)
      .subscribe( (data:any)=>{
        // this.networth = Math.round(data)
        var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',});
        this.networth = formatter.format(data)
      } )
  }

  makeCNWCall(){
    console.log("clicked")
    this.mrktService.getCNWData()
      .subscribe( (data:any)=>{
        this.map =  Object.entries(data);
      } )
  }

}
