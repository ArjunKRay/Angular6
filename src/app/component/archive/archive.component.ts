import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  
  noteslist:any
  ngOnInit() {
    this.getArchive();
  }




  constructor(private noteservice:NoteService,private snackBar:MatSnackBar,
    ) { }


  
 getArchive(){this.noteservice.getArchive('noteservice/getArchive').subscribe(
   (response:any)=>{

    this.noteslist=response;
    console.log(response);
   }
 )

 }


 

}
