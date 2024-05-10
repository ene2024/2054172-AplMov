import { Injectable } from '@angular/core';
import { Tarea } from 'src/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasServiceService {

  tareas: Tarea []=[];

  constructor() { }

  indice=0;

  servagregartarea(nuevatarea: Tarea){
    this.tareas.push(nuevatarea);
  }

  obtenerTarea(id: any){
    return this.tareas[id];
  }

  eliminarTarea(id: number){
    this.tareas.splice(id,1);
  }

}
