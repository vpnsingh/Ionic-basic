import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  id;
  name;
  @ViewChild('username') uname;
  @ViewChild('password') password;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  onLogin(){
    console.log(this.uname.value, this.password.value);
    if(this.uname.value == "admin" && this.password.value == "admin123")
    {
      const alertY = this.alertCtrl.create({
        title: 'Login Successfully',
        subTitle: 'Welcome Back Admin to our system',
        buttons: ['OK']
      });
      alertY.present();
    }else{
        const alertN = this.alertCtrl.create({
          title: 'Login Failed',
          subTitle: 'Login credentials invalid',
          buttons: ['OK']
        });
        alertN.present();
    }
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'This is the basic Toast',
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');
    console.log('ionViewDidLoad FormPage');
  }

}
