import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/model/note';
import { FormControl, Validators } from '@angular/forms';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,
    private noteservice:NoteService) { }


 note:Note=new Note();

  title=new FormControl(this.note.title,[Validators.required,Validators.maxLength(20)]);
  description=new FormControl(this.note.description,[Validators.required,Validators.maxLength(50)]);



  ngOnInit() {}
  open:boolean=false;


  OnOpen()
  {
    this.open=true;
  }


    



  OnClose(){
    this.open=false;
    this.noteservice.createNoteRequest('noteservice/notecreate',this.note).subscribe(
      (response: any) =>{
        if(response.statuscode ===200){
          console.log(response);
          console.log("Note created")
          this.snackBar.open( "Note create Successfully","undo", {duration: 2500} )
        }
        else{
          console.log(response);
          console.log("Note not created")
          this.snackBar.open("Note not create","undo",  {duration: 2500} )
        }
      }
    )
  }
}
