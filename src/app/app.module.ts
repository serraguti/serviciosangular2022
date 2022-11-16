import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PadrecomicsComponent } from './components/padrecomics/padrecomics.component';
import { HijocomicComponent } from './components/hijocomic/hijocomic.component';

@NgModule({
  declarations: [
    AppComponent,
    PadrecomicsComponent,
    HijocomicComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
