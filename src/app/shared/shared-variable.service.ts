import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedVariableService {

  constructor() { }

  getMotivos(): any[]{
    const  motivos = [
      { name: 'Consultar' },
      { name: 'Curiosidade' },
      { name: 'Estudo' },
      { name: 'Pesquisa' },
      { name: 'Trabalho' },
      { name: 'Outros' },
    ];
    return motivos;
  }

  getSexo(): any[]{
    const sexos = [
      { sexo: 'Feminino' },
      { sexo: 'Masculino'}
    ];
    return sexos;
  }
}
