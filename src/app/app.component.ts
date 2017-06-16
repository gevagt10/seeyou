import {Component, OnInit} from '@angular/core';
import {SeeyouService} from './seeyou.service';
import { Location } from './location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat: number = 31.771959;
  lng: number = 35.217018;
  isLocation: boolean = false;
  isImage: boolean = false;
  location: Location = null;
  title = 'See-You application';

  constructor(private seeyouService: SeeyouService) {}
  ngOnInit(): void {
    this.getLocation();
  }
  getPhoto(): void {
    this.isLocation = false;
    this.isImage = true;
  }

  // Get Location event
  getLocation(): void {
    this.seeyouService
      .getLocation()
      .then(value => {
        this.isLocation = true;
        this.isImage = false;
        this.location = value;
        // console.log(this.location);
        // if (value.latitude !== 0) {
        //   this.isLocation = true;
        //   this.isImage = false;
        //   this.lat = value.latitude;
        //   this.lng = value.longitude;
        //   return}
        //   this.isLocation = false
    })
  }
}
