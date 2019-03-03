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
      Authorization: 'Bearer BQDf9AfM7K2YcpkU2-FWIRsBsh0_1y92OahPjTMqOoTLM3Q3H10Y-cp1HeJF_rDPnGrLNJJ_IDlN2laNh2A'
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
