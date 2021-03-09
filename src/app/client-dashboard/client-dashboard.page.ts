import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.page.html',
  styleUrls: ['./client-dashboard.page.scss'],
})
export class ClientDashboardPage implements OnInit {
  email;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.email = this.route.snapshot.params['email'];
  }

}
