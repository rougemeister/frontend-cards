import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [
    {
      src: 'mobile-experience.png',
      title: 'Help us to improve the Experience',
      description: 'Roland is not as bad as you say'
    },
    {
      src: 'get-notified.png',
      title: 'Get Notified',
      description: 'Koko is a little boy'
    },
    {
      src: 'location.png',
      title: 'Allow Location Accesss',
      description: 'I will make you fishers of men'
    }
  ]
}
