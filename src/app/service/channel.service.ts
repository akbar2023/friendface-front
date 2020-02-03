import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from '../model/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  apiChannels = '/api/channels';

  constructor(private http: HttpClient) { }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.apiChannels);
  }
}
