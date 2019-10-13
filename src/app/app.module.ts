import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule
  ,MatMenuModule,
   MatIconModule,
   } from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AddcropComponent } from './addcrop/addcrop.component';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClustersComponent } from './clusters/clusters.component';
import { RegisterComponent } from './register/register.component';
import { CropsComponent } from './crops/crops.component';
import { AdminComponent } from './admin/admin.component';
import { VieworderComponent } from './vieworder/vieworder.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent,
    AddcropComponent,
    ClustersComponent,
    RegisterComponent,
    CropsComponent,
    VieworderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,MatCheckboxModule,MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    BrowserAnimationsModule,
     MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
