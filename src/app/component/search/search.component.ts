import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  noteslist:any;

  constructor(private snackBar:MatSnackBar,private noteService:NoteService,private route:ActivatedRoute,
    private router:Router,private dashboard:DashboardComponent) { }

  ngOnInit() {
    
  }
onSearch(){// this.dashboard.



}

}
