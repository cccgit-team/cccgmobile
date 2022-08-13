import { Component } from '@angular/core';
import {InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  url: string;

  constructor(private inAppBrowser: InAppBrowser) {


  }

  openWebPage(url: string){

    const options: InAppBrowserOptions = {
      location: 'no'
    }

    const browser = this.inAppBrowser.create(url, '_self', options);
  }

}
