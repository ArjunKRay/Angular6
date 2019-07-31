import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpService } from './service/http.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';

import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatSidenavModule} from '@angular/material/sidenav';
import { IconsComponent } from './component/icons/icons.component';
import { NoteComponent } from './component/note/note.component';
import { TrashComponent } from './component/trash/trash.component';
import { GetAllComponent } from './component/get-all/get-all.component';

import { PinComponent } from './component/pin/pin.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { UpdatenoteComponent } from './component/updatenote/updatenote.component';
import { RestoreComponent } from './component/restore/restore.component';
import { SearchComponent } from './component/search/search.component';
import { EditlabelComponent } from './component/editlabel/editlabel.component';
@NgModule({
  declarations: [
                    // contains all componenet that are a part of module
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    IconsComponent,
    NoteComponent,
    TrashComponent,
    GetAllComponent,
    PinComponent,
    ArchiveComponent,
    IconsComponent,
    UpdatenoteComponent,
    RestoreComponent,
    SearchComponent,
    EditlabelComponent

  
  ],
  imports: [
                 // contains all other  componet that are a part of module
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatDividerModule,
    
    MatDatepickerModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatTooltipModule,
    MatChipsModule,


    
    MatSlideToggleModule,
  
    MatGridListModule,
    MatDialogModule

  ],
  providers: [HttpService], 
  entryComponents:[
 UpdatenoteComponent,
 EditlabelComponent
  
    
  ],          
  bootstrap: [AppComponent]
})


export class AppModule { }
