import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  constructor(private _router: Router) { }

  public users: User[] = [];
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });



  getErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? 'You must enter a value' :
      this.profileForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }



  compairemail(email) {
    this.users = JSON.parse(localStorage.getItem('users')) || [];
    return this.users.find(function (obj) {
      return obj.email == email;
    })


  }
  onsubmit() {
    if (!this.compairemail(this.profileForm.value.email)) {
      this.users.push(this.profileForm.value);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    localStorage.setItem('users_author', JSON.stringify(this.profileForm.value));
    this._router.navigate(['']);

  }


  ngOnInit() {
  }

}


interface User {
  email: string,
  password: string
}