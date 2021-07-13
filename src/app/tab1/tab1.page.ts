import { Component, OnInit } from '@angular/core';
import * as yt from 'ionic-youtube-streams';
import * as youtube from 'ionic-youtube-search';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Observable } from 'rxjs';
import { YtService } from '../yt.service';
import { WatchPage } from '../watch/watch.page';
import { IonDatetime, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 
  videos: Observable<any[]>;
  items: Observable<any[]>;
  oldVideos: Observable<any[]>;
  searchModel = '';
  channelId = 'UCP7vi_uJF52wJ9d-oWdVVkA'; // CCCG Channel ID
  playlists: Observable<any[]>;
  liveVideos: Observable<any[]>;
  latestVideos: Observable<any[]>;
  url: string;

  slideOpts = {
    initialSlide: 0,
    spaceBetween: -13,
    slidesPerView: 1.6
  };

  type: string;
  constructor(private readonly streamingMedia: StreamingMedia, private ytService: YtService, private play: YoutubeVideoPlayer,
    private router: Router) 
  {
    this.videos = this.ytService.getListVideos('PLKsphOLhItmu6SDaydqKiclApN16ynUiP');
    this.oldVideos = this.ytService.getListVideos('PLKsphOLhItmtHXAUcYOwBKlObFiqQ7yea');
    console.log(this.oldVideos);
    console.log(this.videos);
    
    this.latestVideos = this.ytService.getLatestVideo(this.channelId);

    this.liveVideos = this.ytService.getLiveVideo(this.channelId);
  }

  openWebPage(url:string)
  {

  }

  itemTapped(id: string, title: string, datePub: string) {
    console.log("the id is " +  id);
    this.router.navigate(['/watch', {id: id, title: title, datePub: datePub}]);
  }

  invokeVideoPlayer(){
    this.play.openVideo('t6Z4mbEHxQM');
  }

  determineLiveOrLatest(){
      
  }

  searchPlaylists() {
    this.playlists = this.ytService.getPlaylistsForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('playlists: ', data);
    }, err => {
      console.log("failed to get playlists");
    })
  }

  async search(){
    alert("search model " + this.searchModel);
    alert('open vic');
    console.log('open Videos:');
    //this.videos = await youtube.search('cccg');
    console.log('Videos:');
    console.log(this.videos);
  }

  async streamVideo(videoId:string){
    alert("lets try streaming " + videoId);
    const info: any = await yt.info(videoId);
    alert(info.formats[0].url);
    this.streamURL(info.formats[0].url);
  }

  private streamURL(url:any){
    const options: StreamingVideoOptions = {
      successCallback: () => {

      },
      errorCallback: (e) => {
        console.log('Error streaming');
        alert("error " + e);
      },
      orientation: 'portrait',
      shouldAutoClose: true,
      controls: true
    };

    this.streamingMedia.playVideo(url,options);
  }

  ngOnInit() {
    this.type = 'sermons';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }


}
