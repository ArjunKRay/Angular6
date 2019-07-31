import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/model/note';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
 

  open: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private noteService: NoteService,
    private snackBar: MatSnackBar,
    private router: Router,private dialog:MatDialog) { }

  

  note : Note = new Note();

  title = new FormControl (this.note.title);
  description = new FormControl(this.note.description);


  ngOnInit() {};
  
  
  
   
  updateNote()
  {
    this.noteService.updateNoteRequest('noteservice/noteupdate?noteId='+this.data.noteId,this.note).subscribe
    (
      (response:any):any=>
      {
        console.log("Response++++"+response);
        
        if(response.statuscode=200)
        {
          this.snackBar.open("note updated","close",{duration:2500});
        }
        else{
          this.snackBar.open("note note updated","close",{duration:2500});
        }
      }
      
    )
    this.dialog.closeAll();
  }
 
  

}
