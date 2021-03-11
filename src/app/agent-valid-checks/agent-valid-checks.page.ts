import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import User from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-agent-valid-checks',
  templateUrl: './agent-valid-checks.page.html',
  styleUrls: ['./agent-valid-checks.page.scss'],
})
export class AgentValidChecksPage implements OnInit {

  matricule;
  user: User;
  users: User[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.refresh();
  }


  refresh() {
    this.matricule = this.route.snapshot.params['matricule'];
    this.userService.getCheckRequestByAgent(this.matricule).then(
      (users: User[]) => {
        this.users = users;
        console.log(users);
      }
    );
  }


  valid(email) {
    this.userService.validCheck(email);
    this.presentToast("check request validated");
    this.refresh();
  }

  refuse(email) {
    this.userService.rejectCheck(email);
    this.presentToast("check request rejected");
    this.refresh();
  }

  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
