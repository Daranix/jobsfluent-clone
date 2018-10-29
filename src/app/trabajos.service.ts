import { Injectable } from '@angular/core';
import { Trabajo } from './trabajo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Injectable()
export class TrabajosService {

  trabajos: Trabajo[];

  private URL = 'https://fluentjobs-clone-d4.firebaseio.com/trabajos';

  constructor(private http: HttpClient) {

  }

  getTrabajos(): Observable<Trabajo[]> {
    return this.http.get(this.URL + '.json').map((res) => {
      const trabajos = [];
      // tslint:disable-next-line:forin
      for (const id in res) {
        const obj = res[id];
        trabajos.push(new Trabajo(id, obj.nombre, obj.descripcion, obj.imgUrl, obj.ciudad, obj.skills, obj.salario));
      }
      return trabajos;
    });
  }

  deleteTrabajo(trabajo: Trabajo): Trabajo {
    return null;
  }

  saveTrabajo(nombre, descripcion, imgUrl, salario, ciudad, skills): Observable<Object> {

    const nuevoTrabajo = {
      nombre: nombre,
      descripcion: descripcion,
      imgUrl: imgUrl,
      salario: salario,
      ciudad: ciudad,
      skills: skills
    };

    return this.http.post(this.URL + '.json', nuevoTrabajo);

  }

  getTrabajo(id: string): Trabajo {
    const idx = this.trabajos.findIndex(trabajo => trabajo.id === id);
    return this.trabajos[idx];
  }

}
