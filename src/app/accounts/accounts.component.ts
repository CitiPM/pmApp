import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
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
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})


export class AccountsComponent implements OnInit {

  constructor(private mrktService: MrktService) { }


  accType: string = "";
  accounts: Account[] = [];

  ngOnInit(): void {
  }

  selectAccountCall(){
    console.log("clicked")
    this.mrktService.getAccData(this.accType)
      .subscribe( (data:any)=>{
        this.accounts = data
      } )
    console.log(this.accounts)  
  }

}
