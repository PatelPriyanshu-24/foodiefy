import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {
loginForm!:FormGroup;
issubmited=false;
constructor(private formbuilder: FormBuilder){ }

ngOnInit():void{
  this.loginForm = this.formbuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required] 
  })
}
get fc(){
  return this.loginForm.controls
}
submit(){
     this.issubmited=true;
     if(this.loginForm.invalid) return;
     alert(`email: ${this.fc.email.value} password: ${this.fc.password.value}`)            
}

}
