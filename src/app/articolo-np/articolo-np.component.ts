import { Component, OnInit } from '@angular/core';
import { ArticoloNP } from '../modules/articolo-np';
import { ArticoloDataService } from './articolo-np-data.service';

@Component({
  selector: 'app-articolo-np',
  templateUrl: './articolo-np.component.html',
  styleUrls: ['./articolo-np.component.css']
})
export class ArticoloNPComponent implements OnInit {

  articoli: ArticoloNP[] = [];

  constructor(private articoloService: ArticoloDataService) { }

  ngOnInit(): void {
    this.articoloService.getArticoloNP().subscribe(

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
