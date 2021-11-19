import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articolo } from '../modules/articoli';

@Injectable({
    providedIn: 'root'
})
export class ArticoloDataService{

    constructor(private httpClient:HttpClient){}

    getArticoloNP(){
        return this.httpClient.get<Articolo[]>('http://localhost:8090/api/articolo/ArticoloNP');
    }
}