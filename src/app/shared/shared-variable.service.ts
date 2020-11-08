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

  getMes(): any[]{
    const meses = [
      { mes : 1 },
      { mes : 2 },
      { mes : 3 },
      { mes : 4 },
      { mes : 5 },
      { mes : 6 },
      { mes : 7 },
      { mes : 8 },
      { mes : 9 },
      { mes : 10 },
      { mes : 11 },
      { mes : 12 }
    ];
    return meses;
  }

  getAno(): any[]{
    const anos = [
      // { ano : 2012 },
      // { ano : 2013 },
      // { ano : 2014 },
      // { ano : 2015 },
      // { ano : 2016 },
      { ano : 2017 },
      { ano : 2018 },
      { ano : 2019 },
    ];
    return anos;
  }

  getStates(): any[]{
    const states = [
      {uf: 'AC', state: 'Acre'},
      {uf: 'AL', state: 'Alagoas'},
      {uf: 'AP', state: 'Amapá'},
      {uf: 'AM', state: 'Amazonas'},
      {uf: 'BA', state: 'Bahia'},
      {uf: 'CE', state: 'Ceará'},
      {uf: 'DF', state: 'Distrito Federal'},
      {uf: 'ES', state: 'Espírito Santo'},
      {uf: 'GO', state: 'Goiás'},
      {uf: 'MA', state: 'Maranhão'},
      {uf: 'MT', state: 'Mato Grosso'},
      {uf: 'MS', state: 'Mato Grosso do Sul'},
      {uf: 'MG', state: 'Minas Gerais'},
      {uf: 'PA', state: 'Pará'},
      {uf: 'PB', state: 'Paraíba'},
      {uf: 'PR', state: 'Paraná'},
      {uf: 'PE', state: 'Pernambuco'},
      {uf: 'PI', state: 'Piauí'},
      {uf: 'RJ', state: 'Rio de Janeiro'},
      {uf: 'RN', state: 'Rio Grande do Norte'},
      {uf: 'RS', state: 'Rio Grande do Sul'},
      {uf: 'RO', state: 'Rondônia'},
      {uf: 'RR', state: 'Roraima'},
      {uf: 'SC', state: 'Santa Catarina'},
      {uf: 'SP', state: 'São Paulo'},
      {uf: 'SE', state: 'Sergipe'},
      {uf: 'TO', state: 'Tocantins'}
    ];
    return states;
  }
}
