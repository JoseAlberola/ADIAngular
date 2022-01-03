import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'LISTA DE TAREAS';
  msg:string = '';
  err: string = '';
  ocultarFormUpdate:boolean = true;

  tareas = [
    {'tarea': 'Hacer la compra'},
    {'tarea': 'Pasear al perro'},
    {'tarea': 'Trabajo ADI'}
  ]

  model:any = {};
  model2:any = {};

  addTarea():void{
    this.tareas.push(this.model);
    this.msg = "Tarea creada";
  }

  deleteTarea(i:number):void{
    var borrar = confirm('¿Deseas eliminar la tarea?');

    if(borrar){
      this.tareas.splice(i, 1);
      this.msg = "Tarea borrada";
    }
  }

  myValue: number = -1;

  editTarea(i: number):void{
    this.ocultarFormUpdate = false;
    this.model2.tarea = this.tareas[i].tarea;
    this.myValue = i;
  }

  updateTarea():void{
    let i = this.myValue;

    if(i < 0){
      this.err = "Debes seleccionar una tarea a editar";
    }
    else{
      for(let j = 0; j < this.tareas.length; j++){
        if(i == j){
          this.tareas[i] = this.model2;
          this.model2 = {};
          this.msg = "Tarea actualizada";
        }
      }
    }
    this.myValue = -1;
  }

  closeAlert():void{
    this.msg = '';
    this.err = '';
  }
}
