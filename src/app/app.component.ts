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
  imageData: any;
  date: any;

  constructor(private seeyouService: SeeyouService) {}
  ngOnInit(): void {
    this.getLocation();
  }
  getPhoto(): void {
    this.isLocation = false;
    this.isImage = true;
    this.seeyouService.getPhoto()
      .then(value => {
        this.imageData = 'data:image/jpg;base64,' + value.image;
        this.date = value.date });
  }

  // Get Location event
  getLocation(): void {
    this.seeyouService.getLocation()
      .then(value => {
        this.isLocation = true;
        this.isImage = false;
        this.location = value;
      })
  }
}
