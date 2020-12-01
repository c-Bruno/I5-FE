import { Component, OnInit } from '@angular/core';
import { SharedVariableService } from '../shared/shared-variable.service';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';

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
    private apiService: ApiService
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
      sugestao: ['']
    });
  }

  sendForm(): void {
    const sugestion = {
      email: this.itemForm.controls.email.value,
      profissao: this.itemForm.controls.profissao.value,
      data: this.itemForm.controls.data.value,
      motivo: this.itemForm.controls.motivo.value,
      sugestao: this.itemForm.controls.sugestao.value
    };
    this.apiService.sendSugestion(sugestion).subscribe(resp => {
      console.log(resp);
    });
  }
}
