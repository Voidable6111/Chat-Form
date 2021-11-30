import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {iData} from './data';
import { from, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private urls: string = "/app/custchat/data.json";

    constructor(private http: HttpClient) { }

    getData(): Observable<iData[]>{
        return this.http.get<iData[]>(this.urls);
    }

    getName(index: number): any{
        
    }

}
