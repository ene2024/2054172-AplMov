import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/tarea';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}
}
