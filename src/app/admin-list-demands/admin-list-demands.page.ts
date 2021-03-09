import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import Agent from '../models/Agent';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-list-demands',
  templateUrl: './admin-list-demands.page.html',
  styleUrls: ['./admin-list-demands.page.scss'],
})
export class AdminListDemandsPage implements OnInit {

  user: User;
  users: User[] = [];
  agents: Agent[] = [];

  constructor(private userService: UserService) { }

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
    this.userService.getUser(form.value.userEmail).then(
      (user: User) => {
        this.user = new User(user.lastName, user.firstName, user.email, user.tel, user.typeCompte);
        this.user.agentMatricule = form.value.agentMatricule;
        this.userService.updateUser(this.user);
        this.refresh();
      }
    )
  }

}
