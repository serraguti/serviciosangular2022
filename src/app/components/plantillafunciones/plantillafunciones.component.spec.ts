import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillafuncionesComponent } from './plantillafunciones.component';

describe('PlantillafuncionesComponent', () => {
  let component: PlantillafuncionesComponent;
  let fixture: ComponentFixture<PlantillafuncionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillafuncionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillafuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
