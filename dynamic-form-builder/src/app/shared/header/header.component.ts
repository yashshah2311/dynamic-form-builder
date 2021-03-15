import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { SharedService } from 'src/app/auth/shared/services/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: any;
  constructor(
    // private sharedService: SharedService 
  ) { }
  // isSessionSet: any;
  // isSessionSet = false;
  ngOnInit(): void {
    // this.subscription = this.sharedService.isLoggedIn().subscribe(newVal => {
    //   console.log('newValnewValnewVal', newVal)
    //   this.isSessionSet = newVal;
    //   console.log(this.isSessionSet)
    // })
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  logout() {
    // sessionStorage.clear();
    // this.sharedService.setSession(false);
  }

}
