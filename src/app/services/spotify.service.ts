import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCR8qSOV8pUj_0d4It3e6fqV8ydDsNc7TAWVJvVQwZBlRBFGn8he-GAvcrAkwfputQvKUjb9CPmgo5cdxQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
