import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewRelases().subscribe((data: any) => {
      this.nuevasCanciones = data;
    });
  }

}
