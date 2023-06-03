import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from './model/post';

@Injectable({
  providedIn: 'root'
})
export class PostServices {
  allPostUrl: string = `${environment.baseUrl}/posts`
  constructor(private _http: HttpClient) { }

  getAllPosts(): Observable<Ipost[]> {
    // const headers = new HttpHeaders({
    //   'Content-Type' : 'application/json',
    //   'Authorization' : 'Bearer Your_token'
    // })
    return this._http.get<Array<Ipost>>(this.allPostUrl)
  }

  getPost(id: number): Observable<Ipost> {
    let singlePostUrl = `${this.allPostUrl}/${id}`;
    return this._http.get<Ipost>(singlePostUrl)
  }

  deletePost(id: number): Observable<any> {

    let deleteUrl = `${environment.baseUrl}/posts/${id}`;
    return this._http.delete<any>(deleteUrl)
  }

  createPost(post: Ipost): Observable<Ipost> {
    // const headers = new HttpHeaders({
    //   'Content-Type' : 'application/json',
    //   'Authorization' : 'Bearer Your_token'
    // })
    return this._http.post<Ipost>
    (this.allPostUrl, post )
  }

  updatePost(post: Ipost): Observable<any> {
    const updateUrl = `${environment.baseUrl}/posts/${post.id}`;
    return this._http.patch<any>(updateUrl, post)
  }

}
