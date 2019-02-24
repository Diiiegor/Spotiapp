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
      Authorization: 'Bearer BQB2q6K216vFizjeL4sZs74Wq33Xw4uhXgRSDXs0XlurB_kXhHEAZnoG13n8E6F-sVqQa31eHddh6IM3on8'
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
