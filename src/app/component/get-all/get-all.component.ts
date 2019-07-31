import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent implements OnInit {

  constructor(private snackbar:MatSnackBar,private noteservice:NoteService,
    private rout:ActivatedRoute,private router:Router,private dialogBox:MatDialog) { }
  noteList: any;
  ngOnInit() {
    this.getNote();
  }

  getNote() {
    this.noteservice.getNoteRequest('noteservice/getnotes').subscribe(
      (response:any) => {
        this.noteList= response;
        console.log('get all note ==>', response);

      }
    )
  }


  openDialog(note:any)
  {
    const ref=this.dialogBox.open(UpdatenoteComponent,{
      
       width:"400px",
       height:"250px",
      
      data:{
       noteId:note.noteId,
       title:note.title,
         description:note.description
      }
     })
  }
    
    



}