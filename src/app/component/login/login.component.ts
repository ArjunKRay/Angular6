import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login;
  email:any =new FormControl(this.login.email,[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);
  password=new FormControl(this.login.password,[Validators.required,Validators.minLength(8)]);
  token: string;

  constructor(private userservice:UserService,
    private snackBar:MatSnackBar,
    
    private route: ActivatedRoute,
    public router: Router) { }
  
  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
  }
  
  
  onLogin(){  
    
    this.userservice.loginRequest('userservice/login',this.login).subscribe(
      (response:any)=>{

        localStorage.setItem('token',response.data);
        console.log('token-----',localStorage.getItem('token'));
        
        if(response.statuscode == 200)
        {
         
          console.log(response);
        
          this.snackBar.open(
            "Login Successfull","undo",{duration: 2500})
          this.router.navigate(['dashboard'])

        }
        else
        {
          console.log(response);
          console.log("unsuccessfull")
          this.snackBar.open("Login Failed",  "Retry",{duration: 2500} )
        }
      }
    )

    }

}







