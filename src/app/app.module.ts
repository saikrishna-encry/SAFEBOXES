import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule for *ngIf

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    CommonModule// ✅ Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
