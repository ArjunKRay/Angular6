import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Resetpassword } from 'src/app/model/resetpassword';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private userservice: UserService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { }

  reset: Resetpassword = new Resetpassword();
  password = new FormControl(this.reset.password, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]);
  confirm = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)])
  
  token: string;

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log('token check in reset ==>', this.token);
    localStorage.setItem('token', this.token);
  }


  onReset() {
    if (this.confirm.value === this.password.value) {
      this.userservice.resetRequest('userservice/resetpassword?password=', this.reset.password).subscribe(
        (response: any) => {

          console.log(this.token);

          if (response.statuscode === 200) {

            console.log(response);
            localStorage.clear();
            this.router.navigate(['login']);

            this.snackBar.open("reset password successfully", "undo", { duration: 5000 })
          }
          else {
            console.log(response);
            this.snackBar.open("password  reset", "Retry", { duration: 5000 })
          }
        }
      )
    } else {

      console.log("password not matched");
    }
  }

}








