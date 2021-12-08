import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  //variable that holds form
  postThis: FormGroup = this.fb.group({
    username: ['user', Validators.required],
    message: ['mess', Validators.required]
  });

  constructor(private dataservice: DataService, private fb:FormBuilder) {
    this.initForm();
   }

   initForm(): void{
    this.postThis = this.fb.group({
      username: ['user', Validators.required],
      message: ['mess', Validators.required]
    });
   }

  ngOnInit() {
    this.dataservice.getData()
        .subscribe(stuff => {
          this.data = stuff
          console.log(stuff);
        
        });
  }

  onSubmit(){
    console.log("sent.", this.postThis);
    let newPost = {
      username: this.postThis.value.username,
      message: this.postThis.value.message,
      id: rng,
      created_on: 5,
      updated_on: 6
    }
    this.dataservice.newPost(newPost).subscribe(data =>{
      console.log(data);
      this.initForm();
    });
  }

}
