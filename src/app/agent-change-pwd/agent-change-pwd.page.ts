import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Agent from '../models/Agent'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-agent-change-pwd',
  templateUrl: './agent-change-pwd.page.html',
  styleUrls: ['./agent-change-pwd.page.scss'],
})
export class AgentChangePwdPage implements OnInit {
  matricule;
  agent: Agent;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.matricule = this.route.snapshot.params['matricule'];
  }

  changePwd(form) {
    if(!form.value.newPwd.trim() || !form.value.confirmNewPwd.trim() || !form.value.newPwd.trim() !== !form.value.confirmNewPwd.trim()) {

    } else {
      this.userService.getAgent(this.matricule).then(
        (agent: Agent) => { 
          this.agent = new Agent(agent.lastName, agent.firstName, agent.email, agent.tel, form.value.newPwd.trim(), agent.matricule);

          this.agent.status = "VALIDE";
          this.userService.updateUser(this.agent);
          this.router.navigate(['/agent-dashboard', this.matricule]);
        }
      ) 
    }
  }

}
