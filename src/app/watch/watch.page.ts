import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.page.html',
  styleUrls: ['./watch.page.scss'],
})

@Pipe({ name: 'safe' })
export class WatchPage implements OnInit, PipeTransform {

  url: string;
  title: string;
  datePub: string;
  vidDate: string;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { 
    this.url = "https://www.youtube.com/embed/" + this.route.snapshot.paramMap.get('id');
    console.log("constructor " + this.url);
    this.title = this.route.snapshot.paramMap.get('title');
    this.datePub = this.route.snapshot.paramMap.get('datePub');
    
    var date = new Date(this.datePub);
    this.vidDate = date.toLocaleDateString();
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  }

}