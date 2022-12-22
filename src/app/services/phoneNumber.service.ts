import { Injectable } from '@angular/core';

export interface phoneNumberObj {
  code: number;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {
  phoneNumberRegEx = new RegExp('^[0-9]{9}$');
  countryCodeRegEx = new RegExp('^[0-9]{2}$');
  startsWithPlus = new RegExp('^[+]');
  startsWithZero = new RegExp('^00');

  constructor() {}

  testPhoneNumber(phoneNumber: string): boolean {
    return this.phoneNumberRegEx.test(phoneNumber.toString());
  }

  testCountryCode(countryCode: number): boolean {
    return this.countryCodeRegEx.test(countryCode.toString());
  }

  getCodeAndNumber(input: string): phoneNumberObj {
    if (this.phoneNumberRegEx.test(input.toString())) {
      return {
        code: null,
        phone: input
      };
    } else if (this.startsWithPlus.test(input.toString())) {
      return {
        code: +input.slice(1, 3),
        phone: input.slice(3, 12)
      };
    } else if (this.startsWithZero.test(input.toString())) {
      return {
        code: +input.slice(2, 4),
        phone: input.slice(4, 12)
      };
    } else {
      return {
        code: +input.slice(0, 2),
        phone: input.slice(2, 11)
      };
    }
  }
}
