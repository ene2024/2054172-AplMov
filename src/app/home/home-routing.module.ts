import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { VistaTareaComponent } from '../vista-tarea/vista-tarea.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
