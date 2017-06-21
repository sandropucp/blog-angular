import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  
  //baseUrl: string = 'https://blogapi-express.herokuapp.com/api/';
  baseUrl: string = 'http://localhost:8000/api/';
  headers: Headers = new Headers();
  options: RequestOptions = new RequestOptions({headers: this.headers})
  
  constructor(private http: Http) {}

  get(path: string): Observable<any>{
    this.addJwtTokenIfExists();
    return this.http.get(`${this.baseUrl}${path}`,this.options)
      .map(res => res.json());
  }

  post(path: string, body: any): Observable<any>{
    this.addJwtTokenIfExists();
    return this.http.post(`${this.baseUrl}${path}`,body, this.options)
      .map(res => res.json());
  }

  put(path: string, body: any): Observable<any>{
    this.addJwtTokenIfExists();
    return this.http.put(`${this.baseUrl}${path}`,body, this.options)
      .map(res => res.json());
  }

  delete(path: string): Observable<any>{
    this.addJwtTokenIfExists();
    return this.http.delete(`${this.baseUrl}${path}`, this.options);
  }

  addJwtTokenIfExists(){
    const value = window.localStorage.getItem('rememberMe');

    if (value){
      const user = JSON.parse(value);
      this.headers.set('x-auth',user.token);
    }else{
      this.headers.delete('x-auth');
    }
  }

}
