import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
 

  constructor(private noteservice:NoteService,private snackBar:MatSnackBar) { }

  

  noteslist:any
  ngOnInit() {
    this.getTrash();
  }
  getTrash()
  {
    this.noteservice.getTrash('noteservice/getTrash').subscribe(  
    (response:any) =>{
        this.noteslist=response;
       console.log(response);
      }
   )
   }

   
  }