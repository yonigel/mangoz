import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socketService/socket.service';

@Component({
  selector: 'app-main-playground',
  templateUrl: './main-playground.component.html',
  styleUrls: ['./main-playground.component.css']
})
export class MainPlaygroundComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.onPlayerEnterdRoomEvent().subscribe(data => {
      console.log('user entered room');
    });
  }

}
