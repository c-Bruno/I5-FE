import { Component, OnInit } from '@angular/core';
import { SharedVariableService } from '../shared/shared-variable.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { from } from 'rxjs';

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

  //testes json
  public dataJson: any;

  constructor(
    private formBuilder: FormBuilder,
    private sharedVariableService: SharedVariableService,
    private apiService: ApiService
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

  loadJson(): void {
    this.apiService.getJSON().subscribe(data => {
      this.dataJson = data;
    });
  }

  salvar() {
    let cont = 1;
    this.dataJson.forEach(element => {
      if (cont >= 670) {
        console.log(cont)
        this.apiService.create(element);
      }
      cont++;
    });
  }

  salvarVarios() {
    this.apiService.createVarios(this.dataJson);
  }

}
