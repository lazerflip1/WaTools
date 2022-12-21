

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wa-tools';

  phoneNumber:number;
  phoneNumberRegEx = new RegExp ('^[0-9]');



  openWhatsapp(): void {

    var result=this.phoneNumberRegEx.test(this.phoneNumber?.toString());
    console.log(result);
    window.open("https://api.whatsapp.com/send?phone="+this.phoneNumber, "_blank");
  }
}
