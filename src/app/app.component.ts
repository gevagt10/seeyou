import {Component, OnInit} from '@angular/core';
import {SeeyouService} from './seeyou.service';
import { Location } from './location';
import {Contact} from './contact';
import {forEach} from "@angular/router/src/utils/collection";

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
  isContacs: boolean = true;
  location: Location = null;
  contacs: Array<any> = [];
  title = 'See-You application';
  imageData: any;
  date: any;
  contacsView: String = '';

  constructor(private seeyouService: SeeyouService) {}
  ngOnInit(): void {
    this.getLocation();
  }
  getPhoto(): void {
    this.isLocation = false;
    this.isContacs = false;
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
        this.isContacs = false;
        this.isImage = false;
        this.location = value;
      })
  }
  // Get Contacs event
  getContacs(): void {
    this.seeyouService.getContacs()
      .then(value => {
        this.isContacs = true;
        this.isLocation = false;
        this.isImage = false;
        this.contacs = value;
      })
  }
}
