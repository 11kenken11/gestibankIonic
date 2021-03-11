import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import User from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-agent-valid-client-demands',
  templateUrl: './agent-valid-client-demands.page.html',
  styleUrls: ['./agent-valid-client-demands.page.scss'],
})
export class AgentValidClientDemandsPage implements OnInit {

  matricule;
  user: User;
  users: User[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.refresh();
  }


  refresh() {
    this.matricule = this.route.snapshot.params['matricule'];
    this.userService.getClientsPendingDemandsByAgent(this.matricule).then(
      (users: User[]) => {
        this.users = users;
        console.log(users);
      }
    );
  }


  valid(email) {
    this.userService.getUser(email).then(
      (user: User) => {
        const password: string = (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).slice(0, 8);
        this.user = new User(user.lastName, user.firstName, user.email, user.tel, user.typeCompte);
        this.user.agentMatricule = user.agentMatricule;
        this.user.password = password;
        this.user.status = "VALIDE";
        this.userService.updateUser(this.user);
        this.presentToast("user account validated");
        this.refresh();
      }
    )
  }

  refuse(email) {
    this.userService.getUser(email).then(
      (user: User) => {
        this.user = new User(user.lastName, user.firstName, user.email, user.tel, user.typeCompte);
        this.user.agentMatricule = user.agentMatricule;
        this.user.status = "REFUSE";
        this.userService.updateUser(this.user);
        this.presentToast("user account rejected");
        this.refresh();
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
