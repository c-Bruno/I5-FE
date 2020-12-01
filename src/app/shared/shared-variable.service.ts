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
      { sexo: 'Masculino'},
      { sexo: 'Não Identificado'}
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
      { ano : 2017 },
      { ano : 2018 },
      { ano : 2019 },
    ];
    return anos;
  }

  getPeriodo(): any[]{
    const periodos = [
      { periodo : 'PELA MANHÃ' },
      { periodo : 'A TARDE' },
      { periodo : 'A NOITE' },
      { periodo : 'DE MADRUGADA' },
      { periodo : 'EM HORA INCERTA' },
    ];
    return periodos;
  }

  getFlagrante(): any[]{
    const flagrantes = [
      { flagrante : 'Sim' },
      { flagrante : 'Não' },
    ];
    return flagrantes;
  }

  getDescricaoLocal(): any[]{
    const descricaoLocais = [
      { local : 'Area não ocupada' },
      { local : 'Comércio e serviços' },
      { local : 'Condominio Residencial' },
      { local : 'Estabelecimento Bancario' },
      { local : 'Estabelecimento Prisional' },
      { local : 'Favela' },
      { local : 'Lazer e recreação' },
      { local : 'Repartição publica' },
      { local : 'Residência' },
      { local : 'Restalrante e afins' },
      { local : 'Rodovia/Estrada' },
      { local : 'Area de saúde' },
      { local : 'Serviços e bens púvlicos' },
      { local : 'Terminal/Estação' },
      { local : 'Unidade reural' },
      { local : 'Via pública' }
    ];
    return descricaoLocais;
  }

  getGrauInstrucao(): any[]{
    const grauInstrucoes = [
      { grau : '1 Grau completo' },
      { grau : '1 Grau incompleto' },
      { grau : '2 Grau completo' },
      { grau : '2 Grau incompleto' },
      { grau : 'Analfabeto' },
      { grau : 'Superior completo' },
    ];
    return grauInstrucoes;
  }

  getCor(): any[]{
    const cores = [
      { cor : 'Amarela' },
      { cor : 'Branca' },
      { cor : 'Parda' },
      { cor : 'Preta' },
      { cor : 'Outros' },
      { cor : 'Não definida' },
    ];
    return cores;
  }

  getIdade(): any[]{
    const idades = [
      { idade : 'Jovem' },
      { idade : 'Adulto' },
      { idade : 'Idoso' }
    ];
    return idades;
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
