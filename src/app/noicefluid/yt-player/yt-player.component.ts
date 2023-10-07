import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.sass'],
})
export class YtPlayerComponent implements OnInit {
  @ViewChild('MainPlayer') MainPlayer!: YouTubePlayer;
  @Input() videoWidth?: number;
  @Input() videoHeight?: number;

  public playerVars: YT.PlayerVars = {
    autoplay: <YT.AutoPlay.AutoPlay>1,
    controls: <YT.Controls.Hide>0,
    modestbranding: <YT.ModestBranding.Modest>1,
    autohide: <YT.AutoHide>1,
    disablekb: <YT.KeyboardControls>1,
    showinfo: <YT.ShowInfo>0,
    loop: <YT.Loop>1,
  };
  public DEFAULT_VIDEO_ID = 'aU-bDvKpmpI';
  private apiLoaded = false;

  constructor() {}

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

  onReady(event: YT.PlayerEvent) {
    console.log('ready');
  }

  onStateChange(event: YT.OnStateChangeEvent) {
    const state = event.data;
    if (state == YT.PlayerState.ENDED) {
      console.log('siguiente video');
      if (this.MainPlayer.videoId == this.DEFAULT_VIDEO_ID) {
        this.MainPlayer.seekTo(0, true);
      }
    } else if (state == YT.PlayerState.PAUSED) {
      console.log('video pausado');
    } else {
      console.log(state);
    }
  }

  onError(event: YT.OnErrorEvent) {
    console.error(event);
  }
}
