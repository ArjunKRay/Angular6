import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/note.service';
import { LabelService } from 'src/app/service/label.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  toggle :boolean=true;
  appName : any; 
  open:boolean;
  list:boolean=true;
  grid:boolean=false;
  search=new FormControl();
  tocken:String
 labelsList:any

  constructor(private router:Router ,private  snackBar:MatSnackBar, private noteservice:NoteService,private labelservice:LabelService) { }

  ngOnInit() { this.getLabel()
   
  }


OnLogout(){
  localStorage.clear();
  this.router.navigate(['login']);
  this.snackBar.open("Logged out successfully!", "OK", { duration: 3000 });

}

onNote(){
       this.router.navigate(['dashboard/note'])
       }

   OnTrash(){

this.router.navigate(['dashboard/trash'])
   }

   OnArchive(){

    this.router.navigate(['dashboard/archive'])
       }

      

   getLabel() {
    this.labelservice.getLabelRequest("labelservice/labels").subscribe(
      (data:any):any=>
      {
        this.labelsList=data
        console.log("get All label",data);
        
      }
    )
  }


// onSearch(){
//       this.router.navigate(['dashboard/search'])
//     }
  

openDialog(){
this.router.navigate(['dashboard/editlabel'])


}



}
