import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Forgotpassword } from 'src/app/model/forgotpassword';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
forgot:Forgotpassword=new Forgotpassword();
 
 

  constructor(private userservice:UserService,
    private snackBar:MatSnackBar,
    private router: Router) { }
    email=new FormControl(this.forgot.email,[Validators.required,Validators.email]);




  ngOnInit() {
  }
 
onForgot(){
   console.log(this.forgot);
   
  this.userservice.forgotPassword("userservice/forget?emailId="+this.forgot.email).subscribe(
    (response:any) =>{
      if(response.statuscode === 200)
      {
        console.log(response);
        this.snackBar.open(
          "Varificational mail sent","undo",
          {duration: 2500}
        )
        
      }
      else{
        console.log(response);
        this.snackBar.open(
          "Mail send Failed","Retry",
          {duration: 2500}
        )
      }
    }
  )
}
}