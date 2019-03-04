import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  /*Ejecuta peticiones get al api de spotify*/
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCmwKLZVcedIR27OmHq-1PZoO7ti8L-ek0XuuQILKRitrNoceIAyhZpxzm9xwTjKRxNDspMhc7O0ViJIOw'
    });
    return this.http.get(url, {headers});
  }

  /*trae los nuevos lansamientos del api de spotify*/
  getNewRelases() {

    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => data.albums.items));
  }

  /*busca un artista*/
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  /*Trae un artista por id*/
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }


  /*Trae el top de canciones de un artista*/
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
      .pipe(map((data: any) => data.tracks));
  }


}
