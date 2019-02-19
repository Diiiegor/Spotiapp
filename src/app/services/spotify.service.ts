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
      Authorization: 'Bearer BQDEVieYp_rRnl4zZ5AVoexzg_oQd7E5ZYBQnUXIEc0rn5Y5W4hoIjkLFu9vAGUrrfcKMDJ8P7-ZIiZHUAQ'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
        console.log(data);
      });
  }
}
