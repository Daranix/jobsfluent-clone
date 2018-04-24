import { Injectable } from '@angular/core';
import { Trabajo } from './trabajo';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrabajosService {

  trabajos: Trabajo[];

  private URL = 'https://fluentjobs-clone-d4.firebaseio.com/trabajos';

  constructor(private http: HttpClient) {

  }

  getTrabajos(): Trabajo[] {
    return this.trabajos;
  }

  saveTrabajo(trabajo: Trabajo): void {

  }

  deleteTrabajo(trabajo: Trabajo): Trabajo {
    return null;
  }

  getTrabajo(id: Number): Trabajo {
    const idx = this.trabajos.findIndex(trabajo => trabajo.id === id);
    return this.trabajos[idx];
  }

}
