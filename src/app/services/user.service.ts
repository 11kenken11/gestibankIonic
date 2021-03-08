import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import User from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersSubject = new Subject<any[]>();
  private users: User[] = [];
  private url = 'http://127.0.0.1:85/users';

  constructor(private httpClient: HttpClient) { }

  createAccount(user) {
    this.httpClient.post(this.url, user).subscribe(
      () => {
        console.log('compte user créé avec succes');
      }, 
      (error) => {
        console.log("erreur: " + error);
      }
    );
 }

 login(email: string, password: string) {
  
  return new Promise(
    (resolve, reject) => {
      this.httpClient.post('http://127.0.0.1:85/authenticate', {email, password}).toPromise().then(
        (data) => {
          resolve(data.valueOf());
          console.log('user authenticated');
        }, (error) => {
          reject(error);
        }
      );
    }
  );

 }
}
