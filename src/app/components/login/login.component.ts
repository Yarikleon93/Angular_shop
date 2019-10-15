import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users: User[] = [];
  constructor(private _router: Router) {}
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  getErrorMessage() {
    return this.profileForm.get('email').hasError('required') ? 'You must enter a value' :
        this.profileForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessagePass() {
    return this.profileForm.get('password').hasError('required') ? 'You must enter a value' :
        this.profileForm.get('password').hasError('minLength(8)') ? '8 characters minimum' : 
        '';
  }

compairemail(email){
  this.users = JSON.parse(localStorage.getItem('users')) || [];
  return this.users.find(function(obj){
    return obj.email == email;
  })}
onsubmit() {
  if (this.profileForm.invalid){
    return
  }
  if(!this.compairemail(this.profileForm.value.email)){
  this.users.push(this.profileForm.value);
  localStorage.setItem('users', JSON.stringify(this.users));
    }
  localStorage.setItem('users_author', JSON.stringify(this.profileForm.value));  
  this._router.navigate(['/goods']);
}
  ngOnInit() {
  }
}
interface User {
  email:string,
  password:string
}