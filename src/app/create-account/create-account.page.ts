import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import User from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  typesC = ['CAC', 'CSC', 'EP'];

  constructor(private userService: UserService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  createAccount(form) {
    const user: User = new User(form.value.lastName, form.value.firstName, form.value.email, form.value.tel, form.value.typeCompte);
    this.userService.createAccount(user);
    this.presentToast("account created, you'll receive an email with your password when activated");
    this.router.navigate(['/home']);
  }

  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
