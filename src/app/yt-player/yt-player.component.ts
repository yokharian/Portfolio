// https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=es
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.sass'],
})
export class YtPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('MainPlayer') MainPlayer!: YouTubePlayer;
  public playerVars: YT.PlayerVars = {
    autoplay: <YT.AutoPlay.AutoPlay>1,
    controls: <YT.Controls.Hide>0,
    modestbranding: <YT.ModestBranding.Modest>1,
    autohide: <YT.AutoHide>1,
    disablekb: <YT.KeyboardControls>1,
    showinfo: <YT.ShowInfo>0,
    // mute: <YT.Mute>1,
    loop: <YT.Loop>1,
  };
  private DEFAULT_VIDEO_ID = 'aU-bDvKpmpI';
  private apiLoaded = false;

  ngOnInit() {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngAfterViewInit() {
    this.MainPlayer.stateChange.subscribe(this.onStateChange);
    this.MainPlayer.ready.subscribe(this.onReady);
    this.MainPlayer.error.subscribe(this.onError);
    this.MainPlayer.videoId = this.DEFAULT_VIDEO_ID;
  }

  public click() {
    this.MainPlayer.videoId = '';

    this.MainPlayer.startSeconds = 5;
    this.MainPlayer.endSeconds = 10;
  }

  public changeVideo() {
    this.MainPlayer.videoId = 'Jm_ZdGh55n4';
    this.MainPlayer.startSeconds = 5;
    this.MainPlayer.endSeconds = 10;
  }

  private onReady(event: YT.PlayerEvent) {
    console.log('ready');
  }

  private onStateChange(event: YT.OnStateChangeEvent) {
    const state = event.data;

    console.log(`cambio de estado ${state}`);
    if (state == YT.PlayerState.ENDED) {
      console.log('siguiente video');
    }
  }

  private onError(event: YT.OnErrorEvent) {
    console.log(`error=${event.data}`);
  }
}
