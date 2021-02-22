import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { RequestUpdate, ResponseCreate, ResponseUpdate, ResponseUser, ResponseUsers } from './user.model';
import { RequestCreate } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users?page=2";
  private urlGet = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

    getUsers(): Observable<ResponseUsers>{
      return this.http.get<ResponseUsers>(this.url);
    }
 
    getUser(id : string): Observable<ResponseUser>{
      console.log(`service: ${id}`)
      const urlGet = `${this.urlGet}/${id}`
      console.log(`urlService: ${urlGet}`);
      return this.http.get<ResponseUser>(urlGet);
    }

    createUser(request: RequestCreate): Observable<ResponseCreate> {
      return this.http.post<ResponseCreate>(this.url, request);
    }

    updateUser(id:string, request: RequestUpdate): Observable<ResponseUpdate>{
      const urlGet = `${this.url}/${id}`
      return this.http.put<ResponseUpdate>(urlGet, request);
    }

    deleteUser(id:string): Observable<any>{
      console.log('clickService')
      const urlGet = `${this.url}/${id}`
      return this.http.delete<any>(urlGet);
    }
}
