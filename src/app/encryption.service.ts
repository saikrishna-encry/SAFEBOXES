import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private baseUrl = 'http://127.0.0.1:8000'; // Replace with your Django backend URL

  constructor(private http: HttpClient) {}

  encryptText(text: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/encrypt/`, { text });
  }

  decryptText(encryptedText: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/decrypt/`, { encryptedText });
  }
}
