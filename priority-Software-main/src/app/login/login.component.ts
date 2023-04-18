import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private router: Router,) { }

  ngOnInit(): void {
    localStorage.setItem("name" , "");
  }

  login(email:string, password:string){
    var users={
      username:"admin@priority-software.com",
      password:"password"
    }
    if(email==users.username&&password ==users.password){
     localStorage.setItem("name", "priority-software");
     this.router.navigate(["dashboard"]);
      }else{
      alert("wrong email or password");
       this.router.navigate(["login"]);
       localStorage.setItem("name" ,"")
      }
    }
}
