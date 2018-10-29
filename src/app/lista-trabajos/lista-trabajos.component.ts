import { Component, OnInit } from '@angular/core';
import { TrabajosService } from '../trabajos.service';
import { Trabajo } from '../trabajo';

@Component({
  selector: 'app-lista-trabajos',
  templateUrl: './lista-trabajos.component.html',
  styleUrls: ['./lista-trabajos.component.css']
})
export class ListaTrabajosComponent implements OnInit {

  trabajos: Trabajo[];
  constructor(private trabajosService: TrabajosService) { }

  ngOnInit() {
    this.trabajosService.getTrabajos().subscribe((res) => {
      this.trabajos = res;
    });
  }

}
