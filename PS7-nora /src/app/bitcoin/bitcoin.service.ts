import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BITCOIN} from '../structure/bitcoin-struct';
import {bcConfigs} from '../config/bcConfig';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })};
  pricesEndpoint = bcConfigs.url;
  //use an observable to fetch data...returning an observable here
  getBitcions(newNames: any): Observable<BITCOIN[]> {
    return this.httpClient.get<BITCOIN[]>(this.pricesEndpoint + newNames.toString(), this.httpOptions);
  }
  //Injections are done in constructor
  constructor(private httpClient: HttpClient) { }
}
