import {Component} from '@angular/core';
import {SeeyouService} from './seeyou.service';
import { Location } from './location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location: Location;
  title = 'See-You application';

  constructor(private seeyouService: SeeyouService) {
  }

  getPhoto(): void {
    console.log(this.location);
  }

  // Get Location event
  getLocation(): void {
    this.seeyouService
      .getLocation()
      .then(value => {this.location = value; console.log(value)})
  }
}
