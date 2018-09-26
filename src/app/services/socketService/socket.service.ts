import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;

  constructor() {
    this.socket = socketIo();
   }

  public onPlayerEnterdRoomEvent(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('enteredRoomEvent', data => {
        observer.next(data);
      });
    });
  }
}
