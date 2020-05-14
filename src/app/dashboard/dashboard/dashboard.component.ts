import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userAuth;
  user: User;


  constructor(
    private authUser: AuthUserService
  ) {
    this.getLocalToken()
  }

  ngOnInit(): void {
    this.authUser.getProfile(this.userAuth.token, this.userAuth.id).subscribe(
      success => {
        this.user = new User(success)
      },
      error => { }
    )
  }

  getLocalToken() {
    this.userAuth = JSON.parse(localStorage.getItem('token-lookafter'))
  }
}
