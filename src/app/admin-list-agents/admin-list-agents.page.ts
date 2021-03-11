import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import Agent from '../models/Agent';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-list-agents',
  templateUrl: './admin-list-agents.page.html',
  styleUrls: ['./admin-list-agents.page.scss'],
})
export class AdminListAgentsPage implements OnInit {

  agents: Agent[] = [];

  constructor(private userService: UserService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.refresh();
  }


  refresh() {

    this.userService.getAgents().then(
      (agents: Agent[]) => {
        this.agents = agents;
        console.log(agents);
      }
    );
  }

  delete(form) {
    this.userService.deleteUser(form.value.email);
    this.presentToast("user deleted")
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
