import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from 'src/app/auth/shared/services/shared/shared.service';
// import { Subscription } from 'rxjs';
// import { SharedService } from 'src/app/auth/shared/services/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: any;
  isLoggedIn: boolean = true;
  constructor(
    private sharedService: SharedService
  ) { }
  // isSessionSet: any;
  // isSessionSet = false;
  ngOnInit(): void {
    if (sessionStorage.getItem('isLoggedin') != null) {
      this.isLoggedIn = true
    }
    else {
      this.isLoggedIn = false
    }
    this.subscription = this.sharedService.username.subscribe(newVal => {
      this.isLoggedIn = newVal
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout() {
    this.isLoggedIn = false
    sessionStorage.clear();
    this.sharedService.setSession(false);
  }

}
