import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      "L'Amour Toujours",
      'A Romantic place in Paris!',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      149.99
    ),
    new Place(
      'p2',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg/1024px-San_Francisco_with_two_bridges_and_the_fog.jpg',
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }
  constructor() {}
}
