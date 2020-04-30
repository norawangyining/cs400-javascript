import { Component } from '@angular/core';
import { BITCOINS} from "./BITCOINS-MOCK";
import { BITCOIN } from './BITCOIN';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6 Bitcoin';
  bitcoins =BITCOINS;
  public selectedBitcoin: BITCOIN;
  //dont know why doesn't private work

  selectBitcoin(bitcoin: BITCOIN) {
    this.selectedBitcoin = bitcoin;

  }

}
