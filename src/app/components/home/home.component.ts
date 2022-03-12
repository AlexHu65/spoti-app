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

  constructor( private http: HttpClient, private spotify:SpotifyService ) {
    this.spotify.getNewReleases().subscribe((data:any) => {
      console.log('Data', (data));
      this.newReleases = data.albums.items;
    });

  }

  ngOnInit(): void {}


}
