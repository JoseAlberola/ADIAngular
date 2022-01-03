import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Lista de la compra';

  employees = [
    {'name': 'Jose', position: 'manager', email:"jose@ua"},
    {'name': 'Javito', position: 'manager', email:"havi@ua"},
    {'name': 'Pedris', position: 'manager', email:"pedro@ua"},
  ]

  model:any = {};
  model2:any = {};

  addEmployee():void{
    this.employees.push(this.model);
  }

  deleteEmployee(i:number):void{

  }

  myValue: number = 0;

  editEmployee(i: number):void{
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void{
    console.log(this.model2);
  }
}
