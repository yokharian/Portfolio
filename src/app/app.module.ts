import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MarkdownModule } from 'ngx-markdown';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoicefluidComponent } from './noicefluid/noicefluid.component';
import { YtPlayerComponent } from './yt-player/yt-player.component';

@NgModule({
  declarations: [
    AppComponent,
    YtPlayerComponent,
    DashboardComponent,
    NoicefluidComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCardModule,
    MatCardModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
