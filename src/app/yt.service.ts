import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YtService {
  //apiKey = 'AIzaSyBaEi2JO2-725tgz0vz0Hk74wxGDQPqHYA';
  apiKey = 'AIzaSyBuZWspufZ2JMzXPh6W5mUitfezsOhUiaM';
 
  constructor(public http: Http) { }

  getLiveVideo(channel)
  {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&eventType=live&type=video')
    .pipe(map((res) => {
      return res.json()['items'];
    }))
  }


  getLatestVideo(channel)
  {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=1&order=date&type=video')
    .pipe(map((res) => {
      return res.json()['items'];
    }))
  }
 
  getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
    .pipe(map((res) => {
      return res.json()['items'];
    }))
  }
 
  getListVideos(listId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=20')
    .pipe(map((res) => {
      return res.json()['items'];
    }))
  }
}
