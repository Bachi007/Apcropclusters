import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AddcropComponent } from './addcrop/addcrop.component';
import { ClustersComponent } from './clusters/clusters.component';
import { RegisterComponent } from './register/register.component';
import { CropsComponent } from './crops/crops.component';
import { VieworderComponent } from './vieworder/vieworder.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path:'about',
    component:HomeComponent
  },
  {
    path:'crops',
    component:CropsComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'vieworder',
    component:VieworderComponent
  },
  {
    path:'clusters',
    component:ClustersComponent
  },
  {
    path:'addcrop',
    component:AddcropComponent
  },
  {
    path:'search',
    component:SearchComponent
  },{
    path:'login',
    component:LoginComponent
  }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
