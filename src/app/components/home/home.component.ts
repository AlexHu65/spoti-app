import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases:any[] = [];
  error:boolean;
  message:string;

  constructor( private http: HttpClient, private spotify:SpotifyService ) {

    this.error = false;
    this.message = '';
    
    this.spotify.getNewReleases().subscribe((data:any) => {
      this.newReleases = data;
    }, (e) => {
      this.error = true;
      this.message = e.error.error.message;
    });

  }

  ngOnInit(): void {}


}
