import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  headers = new Headers({
    'Content-Type': 'application/json',
  });
  // get all posts from api server
  getPosts(): Observable<Post[]>{
    let url = "http://0.0.0.0:3000/api/posts";
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    })
  }
  // get single post from api server
  getPost(id:string): Observable<Post>{
    let url = 'http://0.0.0.0:3000/api/posts/' + id;
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  }
}
