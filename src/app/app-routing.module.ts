import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistationComponent } from './registation/registation.component';
import { ViewtDriveComponent } from './viewt-drive/viewt-drive.component';
import { EditDriveComponent } from './edit-drive/edit-drive.component';


const routes: Routes = [{path:'Home',component:RegistationComponent},
{path:'View',component:ViewtDriveComponent},{
  path:'Edit',component:EditDriveComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
