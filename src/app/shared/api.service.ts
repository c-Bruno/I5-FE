import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _jsonURL = '../../assets/dados17.json';

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  async create(data) {
    const response = await this.http.post(`${environment.apiUrl}/murder`, data).toPromise();
    return response
  }

  createVarios(dataJson) {
    dataJson.forEach((el, index) => {
      setTimeout(() => {
        this.save(el).subscribe(resp => {
          console.log(resp)
        });
      }, index * 1000);
    });
    console.log('acaboooouuuuu');
  }

  save(data): Observable<any> {
    console.log(data);
    return this.http.post(`${environment.apiUrl}/murder`, data);
  }

  saveOne(): Observable<any> {
    const data = {
        'ANO_BO': '2018',
        'NUM_BO': '7789',
        'NUMERO_BOLETIM': '7789/2018',
        'BO_INICIADO': '31/12/2018 23:40',
        'BO_EMITIDO': '01/01/2019 01:14',
        'DATAOCORRENCIA': '31/12/2018',
        'HORAOCORRENCIA': '22:00',
        'PERIDOOCORRENCIA': 'A NOITE',
        'DATACOMUNICACAO': '31/12/2018',
        'DATAELABORACAO': '31/12/2018 23:40',
        'BO_AUTORIA': 'Desconhecida',
        'FLAGRANTE': 'N„o',
        'NUMERO_BOLETIM_PRINCIPAL': 'Null',
        'LOGRADOURO': 'RUA SANTA CATARINA',
        'NUMERO': '145',
        'BAIRRO': 'CABU«U',
        'CIDADE': 'GUARULHOS',
        'UF': 'SP',
        'LATITUDE': '-23,40329211',
        'LONGITUDE': '-46,53131928',
        'DESCRICAOLOCAL': 'Via p˙blica',
        'EXAME': 'IML',
        'SOLUCAO': 'APRECIA«√O DO DELEGADO TITULAR',
        'DELEGACIA_NOME': '07∫ D.P. GUARULHOS',
        'DELEGACIA_CIRCUNSCRICAO': '09∫ D.P. GUARULHOS',
        'ESPECIE': 'TÌtulo I - Pessoa (arts. 121 a 154)',
        'RUBRICA': 'HomicÌdio simples (art. 121)',
        'DESDOBRAMENTO': 'Null',
        'STATUS': 'Consumado',
        'NOMEPESSOA': 'DESCONHECIDO',
        'TIPOPESSOA': 'VÌtima',
        'VITIMAFATAL': 'Sim',
        'RG': 'Null',
        'RG_UF': 'Null',
        'NATURALIDADE': 'Null',
        'NACIONALIDADE': 'Null',
        'SEXO': 'Masculino',
        'DATANASCIMENTO': 'Null',
        'IDADE': '25',
        'ESTADOCIVIL': 'Null',
        'PROFISSAO': 'Null',
        'GRAUINSTRUCAO': 'Null',
        'CORCUTIS': 'Parda',
        'NATUREZAVINCULADA': 'HomicÌdio simples (art. 121)',
        'TIPOVINCULO': 'VÌtima',
        'RELACIONAMENTO': 'Null',
        'PARENTESCO': 'Null',
        'PLACA_VEICULO': 'Null',
        'UF_VEICULO': 'Null',
        'CIDADE_VEICULO': 'Null',
        'DESCR_COR_VEICULO': 'Null',
        'DESCR_MARCA_VEICULO': 'Null',
        'ANO_FABRICACAO': '0',
        'ANO_MODELO': '0',
        'DESCR_TIPO_VEICULO': 'Null',
        'QUANT_CELULAR': 'Null',
        'MARCA_CELULAR': 'Null\n'
    };

    return this.http.post(`${environment.apiUrl}/murder`, data);
  }

}
