import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-playvid',
  templateUrl: './playvid.page.html',
  styleUrls: ['./playvid.page.scss'],
})


export class PlayvidPage implements OnInit {

  url: SafeResourceUrl;
  chaturl: SafeResourceUrl;
  title: string;
  datePub: string;
  vidDate: string;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private socialSharing: SocialSharing) { 
    var urlBuild = "https://www.youtube.com/embed/" + this.route.snapshot.paramMap.get('id');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(urlBuild);
    //this.chaturl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/live_chat?v=9_b-iwRw-_Q" + "&embed_domain=" + window.location.hostname);
    console.log("constructor " + this.url);
    this.title = this.route.snapshot.paramMap.get('title');
    this.datePub = this.route.snapshot.paramMap.get('datePub');
    
    var date = new Date(this.datePub);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    this.vidDate = this.datePub.substring(0,10);
  }

  ShareGeneric(parameter){
    const url = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
    const text = parameter+'\n'
    this.socialSharing.share(text, 'MEDIUM', null, url)
  }

  ShareWhatsapp(){
    const text =  this.route.snapshot.paramMap.get('title');
    const link = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
    this.socialSharing.shareViaWhatsApp(text, 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg', link)
  }

  ShareFacebook(){
    const text =  this.route.snapshot.paramMap.get('title');
    const link = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
    this.socialSharing.shareViaFacebookWithPasteMessageHint(text, 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg', link, 'Copia Pega!')
  }

  SendEmail(){
    const text =  this.route.snapshot.paramMap.get('title');
    const link = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
    this.socialSharing.shareViaEmail('text', 'subject', ['email@address.com'])
  }

  SendTwitter(){
    const text =  this.route.snapshot.paramMap.get('title');
    const link = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
    this.socialSharing.shareViaTwitter(text, 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg', link)
  }

  SendInstagram(){
    const text =  this.route.snapshot.paramMap.get('title');
    const link = "https://www.youtube.com/watch?v=" + this.route.snapshot.paramMap.get('id');
    this.socialSharing.shareViaInstagram(text, 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg')
  }

  ngOnInit() {
  }

}
