import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Registration } from 'src/app/model/registration';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
 selector: 'app-registration',
 templateUrl: './registration.component.html',
 styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  

  register: Registration=new Registration();
  name=new FormControl(this.register.name,[Validators.required])
  email=new FormControl(this.register.email,[Validators.required,Validators.email]);
  phoneNumber = new FormControl(this.register.phoneNumber, [Validators.required, Validators.minLength(10),Validators.maxLength(10)]);
  password=new FormControl(this.register.password,[Validators.required,Validators.minLength(8)])
  


  constructor(private userservice:UserService,
    private snackBar:MatSnackBar,router:Router) { }
  
  ngOnInit() {
  
  }

  onRegister(){
    this.userservice.registerRequest('userservice/register',this.register).subscribe(
      (response: any) =>{
        if(response.statuscode ==200){
          console.log(response);
        
       //   this.router.navigate(['login']);
          this.snackBar.open( "Registered Successfully","undo", {duration: 2500} )
          
        }
        else{
          console.log(response);
          console.log("Unsuccessfull")
          this.snackBar.open("Registration Failed","undo",  {duration: 2500} )
        }
      }
    )
  }
  }