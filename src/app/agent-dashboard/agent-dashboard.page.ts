import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.page.html',
  styleUrls: ['./agent-dashboard.page.scss'],
})
export class AgentDashboardPage implements OnInit {
  matricule;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.matricule = this.route.snapshot.params['matricule'];
  }

}
