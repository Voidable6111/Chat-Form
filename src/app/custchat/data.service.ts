import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {iData} from './data';
import { from, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private urls: string = "http://73.19.65.35:3500/api";

    constructor(private http: HttpClient) { }

    getChannels(){
        return this.urls+"/channel";
    }

    getData(): Observable<iData[]>{
        return this.http.get<iData[]>(this.urls+"/channel/cdickson");
    }

    newPost(item: iData): Observable<iData[]>{
        return this.http.post<iData[]>(this.urls+"/channel/cdickson", item);
    }
    newPatch(item: iData[]): Observable<iData[]>{
        return this.http.patch<iData[]>(this.urls+"/channel/cdickson", item);
    }
    deleteThis(){
        return console.log("success");
    }

}
