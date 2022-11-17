import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PadrecomicsComponent } from './components/padrecomics/padrecomics.component';
import { HijocomicComponent } from './components/hijocomic/hijocomic.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicsService } from './services/comics.service';
import  {HttpClientModule} from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';

import { PersonasService } from './services/personas.service';
import { EmpleadosService } from './services/empleados.service';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { PlantillafuncionesComponent } from './components/plantillafunciones/plantillafunciones.component';
import { PlantillaService } from './services/plantilla.service';

@NgModule({
  declarations: [
    AppComponent,
    PadrecomicsComponent,
    HijocomicComponent,
    MenuComponent,
    HomeComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    PlantillafuncionesComponent
  ],
  imports: [
    HttpClientModule
    , BrowserModule
    , routing
    , FormsModule
  ],
  providers: [PlantillaService
    , EmpleadosService
    , appRoutingProviders
    , ComicsService
    , PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
