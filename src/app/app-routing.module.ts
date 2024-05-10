import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VistaTareaComponent } from './vista-tarea/vista-tarea.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  /*{
    path: 'vistaTarea',
    component: VistaTareaComponent,
    pathMatch: 'full'
  }*/
  
  {
    path: '',
    redirectTo: '/tareas',
    pathMatch: 'full'
  },
  {
    path: 'tareas',
    component: TareasComponent
  },
  {
    path: 'tarea/:id',
    component: VistaTareaComponent,
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
