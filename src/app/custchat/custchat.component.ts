import { Component, Input, OnInit } from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import { DataService } from './data.service';

let rng = uuidv4();

@Component({
  selector: 'app-custchat',
  templateUrl: './custchat.component.html',
  styleUrls: ['./custchat.component.css']
})
export class CustchatComponent implements OnInit {

  data: any[]=[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getData()
        .subscribe(stuff => {
          this.data = stuff
          console.log(stuff);
        
        });
  }

}
