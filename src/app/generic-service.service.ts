import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService<T> {

  protected readonly apiUrl = `${this.baseUrl}/${this.entityname}`;
  constructor(
    protected readonly http: HttpClient,
    protected readonly entityname: string,
    protected readonly baseUrl: string="https://localhost:44303/api"
  ) {}


  create(body: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, body);
  }

  getById(id: number): Observable<T> {
    const url = this.entityUrl(id);
    return this.http.get<T>(url);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  update(id: number, body: T): Observable<T> {
    const url = this.entityUrl(id);
    return this.http.put<T>(url, body);
  }

  delete(id: number): Observable<T> {
    const url = this.apiUrl+'?id='+id;
    return this.http.delete<T>(url);
  }

  protected entityUrl(id: number): string {
    return [this.apiUrl, id].join('/');
  }
}
