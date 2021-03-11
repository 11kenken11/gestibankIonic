import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import User from '../models/User';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService: UserService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  login(form) {
    const email: string = form.value.email;
    const password: string = form.value.password;
    this.userService.login(email, password).then(
      (user: User) => {
        switch(user.role) {
          case 'ADMIN': {
            this.router.navigate(['/admin-dashboard']);
            this.presentToast('Welcome ' + user.firstName + " " + user.lastName.toUpperCase());
            form.reset();
            break;
          }
          case 'CLIENT': {
            this.router.navigate(['/client-dashboard', user.email]);
            this.presentToast('Welcome ' + user.firstName + " " + user.lastName.toUpperCase());
            form.reset();
            break;
          }
          case 'AGENT': {
            this.router.navigate(['/agent-dashboard',user.matricule]);
            this.presentToast('Welcome ' + user.firstName + " " + user.lastName.toUpperCase());
            form.reset();
            break;
          }
        }
      }
    )
  }

  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
