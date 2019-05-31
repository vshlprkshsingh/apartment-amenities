import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmenityService {

  public amenityData = [
    {
      'id': 1,
      'name': 'Club House',
      'price1': 100,
      'price2': 500,
      'start_time': '',
      'end_time': '',
      'date': ''
    },
    {
      'id': 2,
      'name': 'Tennis Court',
      'price1': 50,
      'price2': 50,
      'start_time': '',
      'end_time': '',
      'date': ''
    }
  ];

  constructor() { }

}


