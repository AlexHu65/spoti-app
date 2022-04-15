import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor(private router:ActivatedRoute, private service:SpotifyService) { 

    this.loadingArtist = true;

    this.router.params.subscribe( params => { 
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
     });

  }

  getArtista(id:string){
    this.loadingArtist = true;
    this.service.getArtista(id).subscribe(
      artista => {
        this.artista = artista;
        this.loadingArtist = false;
      }
    )
  }

  getTopTracks(id:string){
    this.loadingArtist = true;
    this.service.getTopTracks(id).subscribe(
      topTracks => {
        this.topTracks = topTracks;
        this.loadingArtist = false;
      }
    )

  }
}
