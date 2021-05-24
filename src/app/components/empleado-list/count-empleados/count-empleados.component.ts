import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css'],
})
export class CountEmpleadosComponent implements OnInit {
  radioButtonSeleccionado = 'Todos';

  @Input() todos: number;
  @Input() femeninos: number;
  @Input() masculinos: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  constructor() {
    this.todos = 0;
    this.femeninos = 0;
    this.masculinos = 0;
  }

  ngOnInit(): void {}

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }
}
