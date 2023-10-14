import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

interface TranslationRequest {
  text: string;
  targetLanguage: string;
}

interface TranslationResponse {
  translatedText: string;
}

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {
  translationRequests: TranslationRequest[] = [];
  translatedTexts: TranslationResponse[] = [];
  inputText: string = '';
  selectedLanguage: string = 'es'; // Replace with the desired target language code

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    this.socket.on('translationResponse', (response: TranslationResponse) => {
      this.translatedTexts.push(response);
    });
  }

  sendTranslationRequest() {
    if (this.inputText.trim() !== '') {
      const request: TranslationRequest = {
        text: this.inputText,
        targetLanguage: this.selectedLanguage,
      };

      this.socket.emit('translateText', request);

      this.translationRequests.push(request);
      this.inputText = '';
    }
  }
}
