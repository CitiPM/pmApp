import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, Input, OnInit } from '@angular/core';
import { MrktService } from 'src/services/mrkt.service';
interface Account {
  id: number;
  type: string;
  ticker: string;
  quantity: number;
  price_purchase: number;
  time_purchase: string;
  price_current: number;
}

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})


export class InvestmentsComponent implements OnInit {

  constructor(private mrktService: MrktService) { }


  accType: string = "investment";
  accounts: Account[] = [];

  ngOnInit(): void {
    this.selectAccountCall();
  }

  selectAccountCall(){
    console.log("clicked")
    this.mrktService.getAccData(this.accType)
      .subscribe( (data:any)=>{
        // var price = String(data.price_current)
        // var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',});
        // data.price_current = formatter.format(data.price_current)
        // console.log(data)
        this.accounts = data
        console.log(this.accounts)
      }) 
    }
}
