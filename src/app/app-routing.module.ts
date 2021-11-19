import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoloNPComponent } from './articolo-np/articolo-np.component';
import { ArticoloComponent } from './articolo/articolo.component';

const routes: Routes = [
  {path:'articolo', component: ArticoloComponent},
  {path:'articoloNP', component: ArticoloNPComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
