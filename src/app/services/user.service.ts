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



 getClientsPendingDemands() {

  return new Promise(
    (resolve, reject) => {
      this.httpClient.get<any[]>('http://127.0.0.1:85/users/pending').toPromise().then(
        (response) => {
          resolve(response.valueOf());
          //this.emitUsersSubject();
        }, (error) => {
          console.log("erreur : " + error);
        }
      )
    }
  )
}



getClientsPendingDemandsByAgent(matricule: string) {

  return new Promise(
    (resolve, reject) => {
      this.httpClient.get<any[]>('http://127.0.0.1:85/users/pending/' + matricule).toPromise().then(
        (response) => {
          resolve(response.valueOf());
        }, (error) => {
          console.log("erreur : " + error);
        }
      )
    }
  )
}


getUser(email: string) {
  return new Promise(
    (resolve, reject) => {
      this.httpClient.get('http://127.0.0.1:85/user/' + email).toPromise().then(
        (data) => {
          resolve(data.valueOf());
        }, (error) => {
          reject(error);
        }
      );
       
    }
  );
  
}


updateUser(user) {
  this.httpClient.put('http://127.0.0.1:85/users/' + user.email, user).subscribe(
    () => {
      console.log('user modifiée')
    }, 
    (error) => {
     console.log('erreur : ' + error);
    }
  );
 }


 getAgents() {

  return new Promise(
    (resolve, reject) => {
      this.httpClient.get<any[]>('http://127.0.0.1:85/agents').toPromise().then(
        (response) => {
          resolve(response.valueOf());
          //this.emitUsersSubject();
        }, (error) => {
          console.log("erreur : " + error);
        }
      )
    }
  )
}

getAgent(matricule: string) {
  return new Promise(
    (resolve, reject) => {
      this.httpClient.get('http://127.0.0.1:85/agents/' + matricule).toPromise().then(
        (data) => {
          resolve(data.valueOf());
        }, (error) => {
          reject(error);
        }
      );
       
    }
  );
}

deleteUser(email: string) {
  this.httpClient.delete('http://127.0.0.1:85/users/' + email).subscribe(
    () => {
     console.log('agent supprimée');
    },
    (error) => {
      console.log('erreur : ' + error);
    }
  );
}

}
