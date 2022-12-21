import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wa-tools';

  phoneNumber: number;
  countryCode: number = 34;
  phoneNumberRegEx = new RegExp('^[0-9]{9}$');

  openWhatsapp(): void {
    if (this.phoneNumberRegEx.test(this.phoneNumber?.toString())) {
      window.open('https://api.whatsapp.com/send?phone=' + this.countryCode + this.phoneNumber, '_blank');
    }
  }
}
