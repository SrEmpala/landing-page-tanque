import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tanque } from './Tanque';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TanquesService {

  url = 'http://localhost:5192/api/tanque';
  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Tanque[]>{
    return this.http.get<Tanque[]>(this.url);
  }

  PegarPeloId(tanqueId: number): Observable<Tanque> { 
    const apiUrl = `${this.url}/${tanqueId}`;
    return this.http.get<Tanque>(apiUrl);
  }

  SalvarTanque(tanque: Tanque) : Observable<any>{
    return this.http.post<Tanque>(this.url, tanque, httpOptions);
  }

  AtualizarTanque(tanque: Tanque) : Observable<any>{
    return this.http.put<Tanque>(this.url, tanque, httpOptions);
  }

  ExcluirTanque(tanqueId: number) : Observable<any>{
    const apiUrl = `${this.url}/${tanqueId}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
} 
