import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PlantillaService {
    constructor(private _http: HttpClient){}

    getFunciones():Observable<any> {
        var request = "/api/plantilla/funciones";
        var url = environment.urlApiPlantilla + request;
        return this._http.get(url);
    }

    getPlantillaFunciones(funciones: any): Observable<any> 
    {
        //INTERINO  --> funcion=INTERINO
        //ENFERMERA --> funcion=ENFERMERA
        var data = "";
        for (var funcion of funciones){
            data += "funcion=" + funcion + "&";
        }
        data = data.substring(0, data.length - 1);
        console.log(data);
        var request = "/api/Plantilla/PlantillaFunciones?" + data;
        var url = environment.urlApiPlantilla + request;
        return this._http.get(url);
    }
}