import { Component, OnInit } from '@angular/core';
import Agent from '../models/Agent';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-list-agents',
  templateUrl: './admin-list-agents.page.html',
  styleUrls: ['./admin-list-agents.page.scss'],
})
export class AdminListAgentsPage implements OnInit {

  agents: Agent[] = [];

  constructor(private userService: UserService) { }

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
    this.refresh();
  }

}
