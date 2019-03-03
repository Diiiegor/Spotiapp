import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
