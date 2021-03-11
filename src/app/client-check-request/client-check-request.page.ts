import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-client-check-request',
  templateUrl: './client-check-request.page.html',
  styleUrls: ['./client-check-request.page.scss'],
})
export class ClientCheckRequestPage implements OnInit {

  email;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.email = this.route.snapshot.params['email'];
  }

  requestCheck() {
    this.userService.requestCheck(this.email);
    this.presentToast("check request sent");
    this.router.navigate(['/client-dashboard', this.email]);
  }

  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
