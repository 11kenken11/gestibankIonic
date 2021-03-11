import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  requestNewPwd(form) {
    if(!form.value.email.trim()) {
      
    } else {
      this.userService.requestNewPwd(form.value.email.trim());
      this.presentToast("new password sent to your email box");
    }
  }

  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
