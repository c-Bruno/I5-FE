import { Component, OnInit } from '@angular/core';
import { SharedVariableService } from '../shared/shared-variable.service';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  // barra ==================================================================================================
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2017', '2018', '2019'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [942, 779, 804], label: 'Feminino' },
    { data: [8528, 6864, 7038], label: 'Masculino' },
    { data: [4175, 1927, 2066], label: 'Não Identificado' }
  ];

  // linha ==================================================================================================
  public lineChartData: ChartDataSets[] = [
    { data: [868, 748, 932, 833, 760, 692, 714, 853, 690, 944, 872, 1018], label: '2019' },
  ];
  public lineChartLabels: Label[] = ['Janeira', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  // pizza ==================================================================================================
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Amarela'], ['Branca'], ['Parda'], ['Preta'], ['Outros'], ['Não definida']];
  public pieChartData: SingleDataSet = [15, 3237, 3571, 724, 27, 1996];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public meses: any;
  public anos: any;
  public estados: any;
  public sexos: any;

  public itemForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private sharedVariableService: SharedVariableService,
    private apiService: ApiService
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
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

  createChart(): void {
    console.log(this.itemForm);
  }

  resetFilters(): void {
    this.loadForm();
  }

}
