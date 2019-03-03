import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  artista: any = [];
  topTracks: any = [];
  loadingArtist: boolean;
  loadingTracks: boolean;

  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) {
    this.loadingArtist = true;
    this.loadingTracks = true;
    this._activatedRoute.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: string) {
    this._spotifyService.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this._spotifyService.getTopTracks(id).subscribe(tracks => {
      this.topTracks = tracks;
      this.loadingTracks = false;
      console.log(this.topTracks);
    });
  }

}
