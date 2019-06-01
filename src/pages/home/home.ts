import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ButtonsPage } from '../buttons/buttons';
import { GridPage } from '../grid/grid';
import { FormPage } from '../form/form';
import { ApidataPage } from '../apidata/apidata';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  items: string[];
  page;
  params;
  constructor(public navCtrl: NavController) {
    this.initializeItems();
    this.page = ApidataPage;
    this.params = {id: 42, 'name': 'APS'}
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Mumbai',
      'Delhi',
      'Chennai',
      'Kolkata'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  loginButton(){
    this.navCtrl.push(LoginPage);
  }
  goButton(){
    this.navCtrl.push(ButtonsPage);
  }
  goGrid(){
    this.navCtrl.push(GridPage);
  }
  goForm(){
    this.navCtrl.push(FormPage);
  }
  goAPI(){
    this.navCtrl.push(ApidataPage);
  }
}
