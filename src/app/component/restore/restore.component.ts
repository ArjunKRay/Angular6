import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss']
})
export class RestoreComponent implements OnInit {

  constructor( private  noteService:NoteService,
    private  router:Router, private snackBar:MatSnackBar ) { }


  @Input() noteInfo:any

  ngOnInit() {
  }


  onRestore() {
    console.log('check id in trash ==>', this.noteInfo.noteId);

    this.noteService.trashRequest("noteservice/trashandUntrash?noteId=" + this.noteInfo.noteId).subscribe(
      (response: any): any => {
        console.log("Response in trash===>" + response);

        if (response.statuscode == 200) {
          this.snackBar.open("note is Untrashed", "close", { duration: 2500 })
        }
        else {
          this.snackBar.open("note is trashed", "close", { duration: 2500 })
        }
      },

      error => {
        console.log("error in trash===>" + error);
      }
    )
  }



}
