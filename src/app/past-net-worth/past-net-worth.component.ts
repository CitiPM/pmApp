import { Component, OnInit } from '@angular/core';
import { MrktService } from 'src/services/mrkt.service';

@Component({
  selector: 'app-past-net-worth',
  templateUrl: './past-net-worth.component.html',
  styleUrls: ['./past-net-worth.component.css']
})
export class PastNetWorthComponent implements OnInit {

  constructor(private mrktService: MrktService) { }

  ngOnInit(): void {
  }

  networth : number = 0.0;
  pastTime : string = "Last Week"

  makePNWCall(){
    console.log("clicked")
    this.mrktService.getPNWData(this.pastTime)
      .subscribe( (data:any)=>{
        this.networth = data
      } )
  }

}
