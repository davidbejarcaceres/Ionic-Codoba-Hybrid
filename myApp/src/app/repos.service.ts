import { map } from 'rxjs/operators';
import { Repo } from '../app/models/repo';
import { Http } from '@angular/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ReposService {
  username: string;

  constructor( public http: Http) { } 

  getRepos(username): Observable<Repo[]> { 
    return this.http.get(`https://api.github.com/users/${username}/repos`).pipe(map(res => <Repo[]>res.json()));
  }
}
