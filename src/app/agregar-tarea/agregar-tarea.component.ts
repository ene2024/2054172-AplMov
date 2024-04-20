import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from 'src/tarea';
import { TareasComponent } from '../tareas/tareas.component';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}


  @Input() nuevaTarea: Tarea = 
  {
    nombre: '',
    mes: 1,
    anio: 1,
    descripcion: '',
  }
  @Output() task = new EventEmitter<Tarea>();  

  agregarTarea(){
    this.modalController.dismiss(this.nuevaTarea);
    this.tareas.push(this.nuevaTarea);
    this.task.emit(this.nuevaTarea)
    this.nuevaTarea = 
    {
      nombre: '',
      mes: 1,
      anio: 1,
      descripcion: '',
    }
  }

  tareas: Tarea[] = []


}
