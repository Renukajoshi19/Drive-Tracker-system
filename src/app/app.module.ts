import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginpageComponent } from './loginpage/loginpage.component';
import{MAterialmodueModule} from './materialmodue/materialmodue.module';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegistationComponent } from './registation/registation.component';
import { from } from 'rxjs';
import { CreatedriveComponent } from './createdrive/createdrive.component';
import { ViewtDriveComponent } from './viewt-drive/viewt-drive.component';
import { EditDriveComponent } from './edit-drive/edit-drive.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegistationComponent,
    CreatedriveComponent,
    ViewtDriveComponent,
     EditDriveComponent,
     NavComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MAterialmodueModule,ReactiveFormsModule,FormsModule,HttpClientModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
