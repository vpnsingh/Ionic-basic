import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-apidata',
  templateUrl: 'apidata.html',
})
export class ApidataPage {

  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.http.get('http://localhost:8000/products/')
    .map(res => res.json()).subscribe(data => {
          this.posts = data;
          console.log(this.posts);
      });

    console.log(this.navParams.get('id') + ' and ' + this.navParams.get('name'))  
    console.log('ionViewDidLoad ApidataPage');
  }

}
