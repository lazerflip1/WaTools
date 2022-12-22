import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private _userCountry = new BehaviorSubject<number>(null);
  userCountry$ = this._userCountry.asObservable();

  constructor(private _httpClient: HttpClient) {}

  getIpCountry(): void {
    this._httpClient.get<any>('https://geolocation-db.com/json/').subscribe(data => {
      const country = data?.country_code;
      if (country) this._userCountry.next(this.getCountryCode(country));
    });
  }

  getCountryCode(country: string): number {
    switch (country) {
      case 'ES':
        return 34;
      case 'FR':
        return 33;
      case 'PT':
        return 351;
      default:
        return 34;
    }
  }
}
