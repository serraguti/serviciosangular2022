import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleadossalario',
  templateUrl: './empleadossalario.component.html',
  styleUrls: ['./empleadossalario.component.css']
})
export class EmpleadossalarioComponent implements OnInit {
  public empleados!: Array<Empleado>;
  @ViewChild("cajasalario") cajaSalario!: ElementRef;

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response => {
      this.empleados = response;
    });
  }

  mostrarEmpleadosSalario(): void {
    var salario = this.cajaSalario.nativeElement.value;
    this._service.getEmpleadosSalario(salario).subscribe(response => {
      this.empleados = response;
    });
  }
}
