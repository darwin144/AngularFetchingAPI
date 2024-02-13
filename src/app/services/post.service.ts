import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

//url api
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=15';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http = inject(HttpClient)
  constructor() { }

  getPost(){
    return this.http.get(BASE_URL);
  }
}
