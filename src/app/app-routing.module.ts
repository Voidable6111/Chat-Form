import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustchatComponent } from './custchat/custchat.component';

const routes: Routes = [
  {path:"cust", component:CustchatComponent},
  {path:"", component:CustchatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
