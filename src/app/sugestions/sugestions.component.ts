import { Component, OnInit } from '@angular/core';
import { SharedVariableService } from '../shared/shared-variable.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sugestions',
  templateUrl: './sugestions.component.html',
  styleUrls: ['./sugestions.component.scss']
})
export class SugestionsComponent implements OnInit {

  public motivos: any;
  public itemForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private sharedVariableService: SharedVariableService,
  ) {
    this.motivos = this.sharedVariableService.getMotivos();
   }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(): void {
    this.itemForm = this.formBuilder.group({
      email: [''],
      profissao: [''],
      data: [''],
      motivo: [null],
    });
  }

}
