import { Component } from '@angular/core';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usersPage = UsersPage;
  shopPage = ShopPage;

  constructor(
    private navCtrl: NavController
  ) {}

  goToUsersPage() {
    this.navCtrl.push(this.usersPage)
      .catch((error) => console.log('Access denied, Argument was ' + error));
  }
}