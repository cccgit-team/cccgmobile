import { Component } from '@angular/core';
import {InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  url: string;

  constructor(private inAppBrowser: InAppBrowser) {}

  openWebPage(url: string){

    const options: InAppBrowserOptions = {
      location: 'no'
    }

    const browser = this.inAppBrowser.create(url, '_self', options);
  }

}
