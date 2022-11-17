import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Plantilla } from 'src/app/models/plantilla';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-plantillafunciones',
  templateUrl: './plantillafunciones.component.html',
  styleUrls: ['./plantillafunciones.component.css']
})
export class PlantillafuncionesComponent implements OnInit {
  public funciones!: Array<string>;
  @ViewChild("selectfunciones") selectFunciones!: ElementRef;
  public plantillas!: Array<Plantilla>;

  mostrarPlantilla(): void {
    var seleccionados = new Array<string>();
    for (var option of this.selectFunciones.nativeElement.options){
      if (option.selected == true){
        seleccionados.push(option.value);
      }
    }
    this._service.getPlantillaFunciones(seleccionados).subscribe(response => {
      this.plantillas = response;
    });
  }

  constructor(private _service: PlantillaService) { }

  ngOnInit(): void {
    this._service.getFunciones().subscribe(response => {
      this.funciones = response;
    });
  }

}
