import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoloNPComponent } from './articolo-np/articolo-np.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'articolo', component: ArticoloComponent},
  {path:'articoloNP', component: ArticoloNPComponent},
  {path:'user', component: UserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
