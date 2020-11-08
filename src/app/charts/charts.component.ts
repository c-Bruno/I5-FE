import { Component, OnInit } from '@angular/core';
import { SharedVariableService } from '../shared/shared-variable.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  public meses: any;
  public anos: any;
  public estados: any;
  public sexos: any;
  public itemForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private sharedVariableService: SharedVariableService,
  ) {
    this.meses = this.sharedVariableService.getMes();
    this.anos = this.sharedVariableService.getAno();
    this.estados = this.sharedVariableService.getStates();
    this.sexos = this.sharedVariableService.getSexo();
  }

  ngOnInit(): void {
  this.loadForm();
  }

  loadForm(): void {
    this.itemForm = this.formBuilder.group({
      mes: [null],
      ano: [null],
      dataOcorrido: [''],
      periodo: [''],
      cidade: [''],
      estado: [null],
      sexo: [null],
      flagrante: [''],
      delegacia: [''],
    });
  }

}
