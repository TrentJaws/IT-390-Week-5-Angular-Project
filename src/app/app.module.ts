/* Credit goes to Angular tutorial (https://angular.io/tutorial/toh-pt2)
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BandsComponent } from './bands/bands.component';

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }