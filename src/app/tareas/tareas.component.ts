import { Component, OnInit, ViewChild } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { Tarea } from 'src/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  constructor(private modalController:ModalController) { }
  

  ngOnInit(): void {
    
  }

  tareas: Tarea[] = [];

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  nuevaTarea: Tarea = 
  {
    nombre: '',
    mes: 1,
    anio: 1,
    descripcion: '',
  }
  
  agregarTarea(){;
    this.tareas.push(this.nuevaTarea);
    this.modalController.dismiss(this.nuevaTarea)
    this.isModalOpen = false;
  }

  abrirDetalles = false;

}
