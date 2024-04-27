import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from 'src/tarea';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { TareasServiceService } from '../tareas-service.service';  

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  constructor(private modalController:ModalController, private tareaserv: TareasServiceService) { }
  

  ngOnInit(): void {
    this.tareaserv.obtenerTarea;
  }

  tareas: Tarea[] = this.tareaserv.tareas;

  nuevaTarea = 
  {
    nombre: '',
    mes: 1,
    anio: 1,
    descripcion: '',
  } ;

  eliminartarea(id: number){
    this.tareaserv.eliminarTarea(id);
  }

  mostrarDescripcion(tarea: any) {
    tarea.mostrarDesc = !tarea.mostrarDesc;
  }


  /*nuevaTarea = 
    {
      nombre: '',
      mes: 1,
      anio: 1,
      descripcion: '',
    } ;
  
  agregarTarea(nuevaTarea: Tarea){
    this.tareas.push(this.nuevaTarea);
    this.modalController.dismiss(this.nuevaTarea)
    //this.isModalOpen = false;
    this.nuevaTarea = 
    {
      nombre: '',
      mes: 1,
      anio: 1,
      descripcion: '',
    }
  }

  abrirDetalles = false;*/
}
