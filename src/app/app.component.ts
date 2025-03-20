import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textToEncrypt = '';
  encryptedText = '';
  textToDecrypt = '';
  decryptedText = '';

  encrypt() {
    // Simple example encryption (reversing text)
    this.encryptedText = btoa(this.textToEncrypt);
  }

  decrypt() {
    try {
      this.decryptedText = atob(this.textToDecrypt);
    } catch (e) {
      alert('Invalid encrypted text');
    }
  }

  updateTextToEncrypt(event: Event) {
    this.textToEncrypt = (event.target as HTMLInputElement).value;
  }

  updateTextToDecrypt(event: Event) {
    this.textToDecrypt = (event.target as HTMLInputElement).value;
  }
}
