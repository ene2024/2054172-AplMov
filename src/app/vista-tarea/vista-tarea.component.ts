import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Tarea } from 'src/tarea';
import { TareasServiceService } from '../tareas-service.service';  
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-vista-tarea',
  templateUrl: './vista-tarea.component.html',
  styleUrls: ['./vista-tarea.component.scss'],
})
export class VistaTareaComponent  implements OnInit {

  constructor(private ruta : ActivatedRoute, private tareaserv: TareasServiceService) { }

  idTarea: string = this.ruta.snapshot.params['id'];

  tarea = this.tareaserv.obtenerTarea(this.idTarea);

  ngOnInit(): void {
    this.tareaserv.obtenerTarea;
  }

}
