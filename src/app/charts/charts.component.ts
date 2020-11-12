import { Component, OnInit } from '@angular/core';
import { SharedVariableService } from '../shared/shared-variable.service';
import { FormBuilder, Validators } from '@angular/forms';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

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
