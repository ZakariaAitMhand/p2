import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent';
import { AgentService } from 'src/app/services/agent/agent.service';
import { Credentials } from 'src/app/models/credentials';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private agentService:AgentService) { }

  ngOnInit(): void {
  }
  router:Router;
  hide:boolean = true;
  userName:string='';
  password:string='';

  clearFields():void{
    this.userName = '';
    this.password = '';
  
  }

  loginFct():void{
    let credentials:Credentials = new Credentials(this.userName, this.password);
    this.agentService.login(credentials);
    console.log("loggedInAgent" + JSON.stringify(this.agentService.loggedInAgent));

    // this.router.navigateByUrl('/home');
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
