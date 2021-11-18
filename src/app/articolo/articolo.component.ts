import { Component, OnInit } from '@angular/core';
import { Articolo } from '../modules/articoli';
import { ArticoloDataService } from './articolo-data.service';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {

  articoli: Articolo[] = [];

  constructor(private articoloService: ArticoloDataService) { }

  ngOnInit(): void {
    this.articoloService.getArticolo().subscribe(

      response => {
        console.log('test');
        this.articoli = response;
        console.log(this.articoli.length);
      },
      error => {
        console.log(error);
      }
    )
  }

}
