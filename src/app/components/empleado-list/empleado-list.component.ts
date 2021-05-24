import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    {
      legajo: 1,
      nombre: 'Robert',
      apellido: 'Cargas',
      sexo: 'Masculino',
      salario: 3000,
    },
    {
      legajo: 2,
      nombre: 'Gabriela',
      apellido: 'Gopa',
      sexo: 'Femenino',
      salario: 3000,
    },
    {
      legajo: 3,
      nombre: 'Edgar',
      apellido: 'Cargas',
      sexo: 'Masculino',
      salario: 3000,
    },
    {
      legajo: 4,
      nombre: 'Daniela',
      apellido: 'Sanri',
      sexo: 'Femenino',
      salario: 3000,
    },
    {
      legajo: 5,
      nombre: 'Diana',
      apellido: 'Castelo',
      sexo: 'Femenino',
      salario: 3000,
    },
  ];

  radioButtonSeleccionado = 'Todos';

  constructor() {}

  ngOnInit(): void {}

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter((item) => item.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter((item) => item.sexo === 'Masculino')
      .length;
  }

  empleadoCountRadioButtonChange(radioButtonSelect: string): void {
    this.radioButtonSeleccionado = radioButtonSelect;
  }
}
