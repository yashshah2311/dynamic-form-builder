import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });

  constructor(private http:HttpClientModule) { }

  // onSubmit(data){
  //   let response = data;
  // }

  
  ngOnInit(): void {
  }

}
