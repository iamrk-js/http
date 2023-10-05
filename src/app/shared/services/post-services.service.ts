import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from './model/post';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PostServices {
  allPostUrl: string = `${environment.baseUrl}/post`
  constructor(private _http: HttpClient, private _snackBar : SnackbarService) { }

  getAllPosts(): Observable<Ipost[]> {
    return this._http.get<Array<Ipost>>(this.allPostUrl)
      .pipe(
        catchError(err => {
          // alert(`Something Went Wrong !!!`)
          this._snackBar.opensanckBar(`Something Went Wrong !!!`, 'close')
          return of(err)
        })
      )
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
