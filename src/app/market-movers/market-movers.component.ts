import { Component, OnInit } from '@angular/core';
import { MrktService } from 'src/services/mrkt.service';

@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {

  accountNames: string[] = [];

  paramGL : string = "gainers";

  indicesNum: number[] = [];
  indicesNames: string[] = ["S&P 500", "Dow Jones Industrial Average", "Nasdaq Composite", "Russell 2000 Index"];

  constructor(private mrktService: MrktService) { }

  ngOnInit(): void {
  }
  
  mrktindexCall(){
    this.mrktService.getIndicesData().subscribe((data:any)=>{this.indicesNum = data})
  }

  makeServiceCall(){
    console.log("clicked")
    this.mrktService.getGLData(this.paramGL)
      .subscribe( (data:any)=>{
        this.accountNames = data
      } )
  }

}
