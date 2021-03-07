import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('formGroup') userForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl('')
  });

  onSubmit() {
    console.log("Hiii");
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
  }

}
