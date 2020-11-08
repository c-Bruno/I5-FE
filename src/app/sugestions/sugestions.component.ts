import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugestions',
  templateUrl: './sugestions.component.html',
  styleUrls: ['./sugestions.component.scss']
})
export class SugestionsComponent implements OnInit {

  constructor() { }

  public motivos = [
    { id: 1, name: 'Consulta' },
    { id: 2, name: 'Curiosidade' },
    { id: 3, name: 'Estudo' },
    { id: 4, name: 'Pesquisa' },
    { id: 4, name: 'Trabalho' },
    { id: 4, name: 'Outros' },
  ];

  ngOnInit(): void {
  }

}
