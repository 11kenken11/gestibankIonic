import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import Agent from '../models/Agent';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-list-demands',
  templateUrl: './admin-list-demands.page.html',
  styleUrls: ['./admin-list-demands.page.scss'],
})
export class AdminListDemandsPage implements OnInit {

  user: User;
  users: User[] = [];
  agents: Agent[] = [];

  constructor(private userService: UserService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.refresh();
  }


  refresh() {
    this.userService.getClientsPendingDemands().then(
      (users: User[]) => {
        this.users = users;
        console.log(users);
      }
    );

    this.userService.getAgents().then(
      (agents: Agent[]) => {
        this.agents = agents;
        console.log(agents);
      }
    );
  }


  affect(form) {
    if(form.value.agentMatricule) {
    this.userService.getUser(form.value.userEmail).then(
      (user: User) => {
        this.user = new User(user.lastName, user.firstName, user.email, user.tel, user.typeCompte);
        this.user.agentMatricule = form.value.agentMatricule;
        this.userService.updateUser(this.user);
        this.presentToast("user: " + user.firstName + " " + user.lastName.toUpperCase() +" affected to agent: " + this.user.agentMatricule);
        this.refresh();
      }
    )} else {
      this.presentToast("Please assign an agent");
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
