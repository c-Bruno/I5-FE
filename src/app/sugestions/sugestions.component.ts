import { Component, OnInit } from '@angular/core';
import { SharedVariableService } from '../shared/shared-variable.service';

@Component({
  selector: 'app-sugestions',
  templateUrl: './sugestions.component.html',
  styleUrls: ['./sugestions.component.scss']
})
export class SugestionsComponent implements OnInit {

  public motivos: any;
  public itemForm: any;

  constructor(
    private sharedVariableService: SharedVariableService,
  ) {
    this.motivos = this.sharedVariableService.getMotivos();
   }

  ngOnInit(): void {
  }

}
