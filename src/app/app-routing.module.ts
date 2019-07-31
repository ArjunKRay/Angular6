import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NoteComponent } from './component/note/note.component';
import { TrashComponent } from './component/trash/trash.component';
import { GetAllComponent } from './component/get-all/get-all.component';

import { ArchiveComponent } from './component/archive/archive.component';
import { PinComponent } from './component/pin/pin.component';
import { IconsComponent } from './component/icons/icons.component';
import { UpdatenoteComponent } from './component/updatenote/updatenote.component';
import { RestoreComponent } from './component/restore/restore.component';
import { EditlabelComponent } from './component/editlabel/editlabel.component';
import { SearchComponent } from './component/search/search.component';





const routes: Routes = [
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
  path : 'login', 
  component:LoginComponent
  },
  {
    path: 'forgotpassword',
   component:ForgotpasswordComponent

  },
  {
    path:'resetpassword/:token',
    component:ResetpasswordComponent
  },

  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'note',
        component:NoteComponent
        
          },

          {
            path:'',
            component:GetAllComponent
          } ,
          { path:'archive',
          component:ArchiveComponent
          },

           {  path:'trash',
          component:TrashComponent
            }, 
         
            {
              path:'editlabel',
              component:EditlabelComponent
              
                },
            

        ]
       },

       {
     path:'search',
     component:SearchComponent
            
      },
      
  {
path:'pin',
component:PinComponent

  },
{
  path:'restore',
  component:RestoreComponent

},



  {
path:'icons',
component:IconsComponent

  },
  {
   path:'updatenote',
   component:UpdatenoteComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
