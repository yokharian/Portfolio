import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';

import { NoicefluidComponent } from './noicefluid/noicefluid.component';
import { YtPlayerComponent } from './noicefluid/yt-player/yt-player.component';
import { ChatComponent } from './noicefluid/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    Error404Component,
    NoicefluidComponent,
    YtPlayerComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    HttpClientModule,
    MatRadioModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
