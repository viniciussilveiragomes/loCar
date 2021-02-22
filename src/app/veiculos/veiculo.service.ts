import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseVeiculo } from './veiculo.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  //private url = "";

  constructor(private http: HttpClient) { }
 
  //observable ( retorno assincróno )
 /* getVeiculos(): Observable<ResponseVeiculo> {
    return this.http.get<ResponseVeiculo>(this.url);
  }*/
}
