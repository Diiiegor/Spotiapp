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

  /*trae los nuevos lansamientos del api de spotify*/
  getNewRelases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBNrNwO3mr9YOLle9VAe1GiPt4DBnDQWk3Ws91K1bQ2ih6xRMhu0XGxnvgmkGibOcbevaHFNDCFU0IuWss'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map((data: any) => data.albums.items));
  }

  /*busca un artista*/
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBNrNwO3mr9YOLle9VAe1GiPt4DBnDQWk3Ws91K1bQ2ih6xRMhu0XGxnvgmkGibOcbevaHFNDCFU0IuWss'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
      .pipe(map((data: any) => data.artists.items));
  }
}
