import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ServicesComponent } from './mainContent/services/services.component';


const routes: Routes = [
  {path : '', redirectTo :'home' , pathMatch : 'full'},
  {path : 'home', component : MainContentComponent },
  {path : 'about', component : AboutComponent },
  {path : '**', component : ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
