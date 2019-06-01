import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ApidataPage } from '../apidata/apidata';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afauth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        console.log("User LoggedIn " + res);
        this.navCtrl.push(ApidataPage);
        resolve(res);
      }, err => reject(err));
    });
  }

  googleLogin(){
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.afauth.auth
      .signInWithPopup(provider)
      .then(res =>{
        console.log(res);
        resolve(res);
      });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afauth.auth.signOut()
        .then(res =>{
          console.log("Logout Successfully" + res);
          resolve();
        })
      } else {
        console.log("Error");
        reject();
      }
    });
  }
}
