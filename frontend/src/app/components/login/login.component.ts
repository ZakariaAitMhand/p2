import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent';
import { AgentService } from 'src/app/services/agent/agent.service';
import { Credentials } from 'src/app/models/credentials';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private agentService:AgentService, private _snackBar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }
  hide:boolean = true;
  userName:string='';
  password:string='';

  clearFields():void{
    this.userName = '';
    this.password = '';
  
  }

  async loginFct():Promise<void>{
    if(this.userName=='' || this.password==''){
      this.wrongCredentialsAlert();
    }
    else{
      let credentials:Credentials = new Credentials(this.userName, this.password);
      await this.agentService.login(credentials);

      if(this.agentService.loggedInAgent == null){
        this.wrongCredentialsAlert();
        return;
      }
      console.log("loggedInAgent" + JSON.stringify(this.agentService.loggedInAgent));
      this.agentService.LoginContainer=false;
      this.agentService.LoginContainerBackTransparent=false;
      location.reload();
    }
    
  }

  wrongCredentialsAlert() {
    this._snackBar.open("Wrong credentials",'', {
      duration: 1000,
    });
  }

  // inputs={
  //   userName: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required, Validators.min(3) ])
  // }
  // signin: FormGroup = new FormGroup({
  //   userName: new FormControl('', [Validators.required, Validators.min(3) ]),
  //   password: new FormControl('', [Validators.required, Validators.min(3) ])
  // });
  // get userName() { 
  //   return this.signin.get('userName'); 
  // }
  // get passwordInput() { 
  //   return this.signin.get('password'); 
  // }

}
