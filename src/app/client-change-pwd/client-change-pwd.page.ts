import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import User from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-client-change-pwd',
  templateUrl: './client-change-pwd.page.html',
  styleUrls: ['./client-change-pwd.page.scss'],
})
export class ClientChangePwdPage implements OnInit {

  email;
  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.email = this.route.snapshot.params['email'];
  }

  changePwd(form) {
    if(!form.value.newPwd.trim() || !form.value.confirmNewPwd.trim() || !form.value.newPwd.trim() !== !form.value.confirmNewPwd.trim()) {

    } else {
      this.userService.getUser(this.email).then(
        (user: User) => { 
          this.user = new User(user.lastName, user.firstName, user.email, user.tel, user.typeCompte);
          this.user.password = form.value.newPwd.trim();
          this.user.status = "VALIDE";
          this.user.role = "CLIENT";
          this.userService.updateUser(this.user);
          this.presentToast("password updated");
          this.router.navigate(['/client-dashboard', this.email]);
        }
      ) 
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
