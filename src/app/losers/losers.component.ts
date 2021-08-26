import { Component, OnInit, Input } from '@angular/core';
import { MrktService } from 'src/services/mrkt.service';

@Component({
  selector: 'app-losers',
  templateUrl: './losers.component.html',
  styleUrls: ['./losers.component.css']
})
export class LosersComponent implements OnInit {

  accountNames: string[] = [];

  paramGL : string = "losers";

  constructor(private mrktService: MrktService) { }

  ngOnInit(): void {
    this.makeServiceCall();
  }

  makeServiceCall(){
    console.log("clicked")
    this.mrktService.getGLData(this.paramGL)
      .subscribe( (data:any)=>{
        this.accountNames = data
      } )
  }

}
