import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/note.service';
import { LabelService } from 'src/app/service/label.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  
  
 

  constructor(private noteService: NoteService, private snackBar: MatSnackBar,private labelservice:LabelService) { }
  @Input() noteInfo: any
  labels:any
  labelsList: any;
  ngOnInit() {
    this.getLabels();
    //this.getLabelsOfNotes();
     

  }

  onTrash() {
    console.log('check id in trash ==>', this.noteInfo.noteId);

    this.noteService.trashRequest("noteservice/trashandUntrash?noteId=" + this.noteInfo.noteId).subscribe(
      (response: any): any => {
        console.log("Response in trash===>" + response);

        if (response.statuscode == 200) {
          this.snackBar.open("note is trashed", "close", { duration: 2500 })
        }
        else {
          this.snackBar.open("note is untrashed", "close", { duration: 2500 })
        }
      },

      error => {
        console.log("error in trash===>" + error);
      }
    )
  }

  
  onArchive() {
    this.noteService.archiveRequest("noteservice/archiveandUnarchive?noteId=" + this.noteInfo.noteId).subscribe(
      (response: any): any => {
        if (response.statuscode == 200) {
          this.snackBar.open("note is archived", "close", { duration: 2500 })
        }
        else {
          this.snackBar.open("note is unarchived", "close", { duration: 2500 })
        }
      }
    )

  }





  getLabels()
  {
    this.labelservice.getLabelRequest("labelservice/labels").subscribe(
      (data:any):any=>
      {
        this.labelsList=data
        console.log("get All label",data);
        
      }
    )
  }


  // getLabelsOfNotes()
  // {
  //   this.noteService.getNoteRequest(""+this.noteInfo.noteId).subscribe(
  //     (data:any):any=>
  //     {
  //       this.labelsList=data;
  //       console.log("noteLabelsList  ==>"+this.labelsList);
        

  //     }
  //   )
  // }





  addLabelToNote(label)
  {
    this.labelservice.addLabelToNote("labelservice/addlabel?labelId="+label.labelId+"&noteId="+this.noteInfo.noteId).subscribe(
      (respose:any):any=>
      {
        if(respose.statuscode==200)
        {
          
          this.snackBar.open("label added to note ","close",{duration:2500});
        }
        else
        {
          this.snackBar.open("please check fields...","close",{duration:2500});
        }
      }
    )
  }





}


