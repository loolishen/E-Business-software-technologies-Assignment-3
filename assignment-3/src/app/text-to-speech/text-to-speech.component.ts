import { Component } from '@angular/core';
import { io } from 'socket.io-client';
@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.css']
})
export class TextToSpeechComponent {
  messageText: string='';
  socket: any;
  constructor() {
    this.socket = io();
  }
  sendMessage() {
    let message={
      msg:this.messageText,
    }
    this.socket.emit("newMsg", message);
    this.messageText = "";
  }
}
