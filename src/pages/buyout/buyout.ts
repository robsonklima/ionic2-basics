import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})

export class BuyoutPage implements OnInit {
    product: { name: string, quantity: number };

    constructor(
        private navParams: NavParams,
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        this.product = this.navParams.data;
    }

    onConfirmPurchase() {
        this.navCtrl.popToRoot();
    }
}