import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Agent from '../models/Agent';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-create-agent',
  templateUrl: './admin-create-agent.page.html',
  styleUrls: ['./admin-create-agent.page.scss'],
})
export class AdminCreateAgentPage implements OnInit {
//constructor(lastName: string, firstName: string, email: string, tel: string, password: string, matricule: string) {
  constructor(private userService: UserService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  createAgent(form) {
    const password: string = (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).slice(0, 8);
    const agent: Agent = new Agent(form.value.lastName, form.value.firstName, form.value.email, form.value.tel, password, form.value.matricule);
    this.userService.createAccount(agent);
    this.presentToast("agent created: " + agent.firstName + " " + agent.lastName.toUpperCase());
    this.router.navigate(['/admin-dashboard']);
  }

  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
