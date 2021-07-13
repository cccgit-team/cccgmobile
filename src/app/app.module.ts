import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';

import { HttpModule } from '@angular/http';
import { YtService } from './yt.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpModule],
  providers: [
    StreamingMedia,
    YoutubeVideoPlayer, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    YtService,
    YoutubeVideoPlayer,
    InAppBrowser
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
