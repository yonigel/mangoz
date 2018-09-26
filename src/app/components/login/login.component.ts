import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginFormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      playerName: ['', Validators.required]
    });
  }

  private onPlayerLogin(): void {
    this.router.navigate(['/main']);
  }

}
