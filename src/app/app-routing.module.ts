import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { TvComponent } from './tv/tv.component';


const routes: Routes = 
[
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'tv',component:TvComponent},
  {path:'signin',component:LoginComponent},
  {path:'moviedetails/:id',component:MoviedetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
