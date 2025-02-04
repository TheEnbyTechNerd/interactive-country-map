import { Component } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-world-map',
  standalone: false,

  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  countryData: any = null;

  clickCountry(event: MouseEvent): void {

    const target = event.target as SVGElement;
    const countryId = target.id;

    if (countryId) {
      console.log(`Clicked country: ${countryId}`);
      this.getCountryData(countryId);
    } else {
      console.log('Clicked outside a country path');
    }
  }

  getCountryData(countryCode: string): void {
    const apiUrl = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {

        this.countryData = {
          name: data[1][0].name,
          capital: data[1][0].capitalCity,
          region: data[1][0].region.value,
          incomeLevel: data[1][0].incomeLevel.value,
          latitude: data[1][0].latitude,
          longitude: data[1][0].longitude
        };
        console.log(this.countryData);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  }
}
