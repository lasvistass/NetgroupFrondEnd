import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../modules/user';

@Injectable({
    providedIn: 'root'
})
export class UserDataService{

    constructor(private httpClient:HttpClient){}

    getUser(){
        return this.httpClient.get<User[]>('http://localhost:8080/users/findall');
    }
}