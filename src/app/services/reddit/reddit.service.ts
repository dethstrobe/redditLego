import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RedditResponse } from './reddit.model';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getLegoData(): Observable<RedditResponse> {
    return this._httpClient.get<RedditResponse>('https://www.reddit.com/r/lego.json');
  }
}
