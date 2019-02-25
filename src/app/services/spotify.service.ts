import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  /*Ejecuta peticiones get al api de spotify*/
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAXECQaXVKTL733bVgU0Io-BLabhM3KAPLASiuHSb0AD4vJDbD8rkpoumOR7D4i2YJqOink18MMuxb1ryQ'
    });
    return this.http.get(url, {headers});
  }

  /*trae los nuevos lansamientos del api de spotify*/
  getNewRelases() {

    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => data.albums.items));
  }

  /*busca un artista*/
  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }
}
