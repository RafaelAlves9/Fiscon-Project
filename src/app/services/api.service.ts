import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Types/Types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "http://localhost:3000/register/";

  constructor(private http : HttpClient) { }

  //api da lista de usuário
  postUser(user : User){
    return this.http.post<any>(this.url, user)
  };
  getUser(){
    return this.http.get<any>(this.url)
  }
  editUser(user : User){
    return this.http.patch<any>(this.url+user.id, {
      name: user.name,
      tel: user.tel,
      updationDate: new Date()
    })
  }
  removeUser(user : User){
    return this.http.delete<any>(this.url+user.id)
  }
}
