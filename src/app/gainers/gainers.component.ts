import { Component, OnInit, Input } from '@angular/core';
import { MrktService } from 'src/services/mrkt.service';

@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.css']
})
export class GainersComponent implements OnInit {

  accountNames: string[] = [];

  paramGL : string = "gainers";

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
