import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs';
import { LocationService, phoneNumberObj, PhoneNumberService } from 'src/app/services';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.scss']
})
export class ToolsPageComponent implements OnInit {
  waApi = 'https://api.whatsapp.com/send?phone=';

  phoneNumber: string;
  countryCode: number = 34;

  constructor(private _locationSvc: LocationService, private _phoneNumberService: PhoneNumberService) {}

  ngOnInit(): void {
    this._locationSvc.getIpCountry();
    this._locationSvc.userCountry$
      .pipe(
        filter(x => !!x),
        take(1)
      )
      .subscribe(userCountryCode => {
        this.countryCode = userCountryCode;
      });
  }

  openWhatsapp(): void {
    if (this._phoneNumberService.testPhoneNumber(this.phoneNumber)) {
      this.openUrl(this.countryCode, this.phoneNumber);
    }
  }

  async paste() {
    const clipboard = await navigator.clipboard.readText();
    const phoneObj: phoneNumberObj = this._phoneNumberService.getCodeAndNumber(clipboard);
    const countryCode = phoneObj.code ?? this.countryCode;
    const phoneNumber = phoneObj.phone;
    if (this._phoneNumberService.testCountryCode(+countryCode) && this._phoneNumberService.testPhoneNumber(phoneNumber)) {
      this.openUrl(+countryCode, clipboard);
    }
  }

  private openUrl(countryCode: number, phoneNumber: string): void {
    window.open(this.waApi + countryCode + phoneNumber, '_blank');
  }
}
