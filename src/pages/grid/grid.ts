import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormPage } from '../form/form';

@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html',
})
export class GridPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  redirectForm(){
    this.navCtrl.push(FormPage, {
      'id': '123',
      'name': 'Vipin'
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GridPage');
  }

}
