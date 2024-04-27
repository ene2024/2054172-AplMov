import { Injectable } from '@angular/core';
import { Tarea } from 'src/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasServiceService {

  tareas: Tarea []=[];

  constructor() { }

  servagregartarea(nuevatarea: Tarea){
    this.tareas.push(nuevatarea);
  }

  obtenerTarea(){
    return this.tareas;
  }

  eliminarTarea(id: number){
    this.tareas.splice(id,1);
  }

}
