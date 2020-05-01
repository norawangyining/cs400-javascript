import {Component} from '@angular/core';
import {BitcoinService} from './bitcoin/bitcoin.service';
import {BITCOIN} from './structure/bitcoin-struct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS7';
  bitcoins: BITCOIN[];
  names: string;

  getBitcoins(): void {
    const newNames: string = this.names;
    this.bc.getBitcions(newNames).subscribe(
      bitcoins => {
          {
            const tmpAllkeys = Object.keys(bitcoins);
            const tmpArray = [];
            for (const prop of tmpAllkeys) {
              tmpArray.push(bitcoins[prop]);
            }
            this.bitcoins = tmpArray;
            this.bitcoins = bitcoins['quote'];


          }
        }
      )
    ;
  }

  constructor(private bc: BitcoinService) {
  }


}
