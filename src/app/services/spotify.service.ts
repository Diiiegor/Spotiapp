import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewRelases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDmM9vTGZ7hFI79MOdhTfqcZjXlvPhFna51oFGcupBm8ZESPLiurCVm6HpInV-OBhkL0uezHnPaBqAKyH0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
