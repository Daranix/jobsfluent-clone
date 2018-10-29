import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { TrabajosService } from '../trabajos.service';
import { Trabajo } from '../trabajo';
import { Router } from '@angular/router';

// Reactive form

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private trabajoService: TrabajosService, private router: Router) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      imgUrl: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      salario: new FormControl(0, [Validators.required, Validators.min(1000)]),
      descripcion: new FormControl(''),
      skills: new FormArray([])
    });

  }

  onSubmit() {
    console.log(this.formulario);
    const form = this.formulario.controls;

    this.trabajoService.saveTrabajo(form.nombre.value,
      form.descripcion.value,
      form.imgUrl.value,
      form.salario.value,
      form.ciudad.value, []).subscribe((res) => {
        console.log(res);
        console.log('Trabajo guardado');
        this.router.navigate(['/trabajos']);
      });
  }

}
