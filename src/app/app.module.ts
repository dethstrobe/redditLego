import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { RedditService } from './services/reddit/reddit.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
