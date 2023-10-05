import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostServices } from '../../services/post-services.service';
import { Ipost } from '../../services/model/post';
import { Observable, Subject, interval } from 'rxjs';
import { AuthInterceptorService } from '../../services/auth-interceptor.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  postsArray: Array<Ipost> = [];
  postArray$ !: Observable<Ipost[]>;
  // unsubscribe$: Subject<void> = new Subject<void>();
  constructor(private _postService: PostServices,
      private _authInterceptor : AuthInterceptorService) { }

  ngOnInit(): void {
    this.postArray$ = this._postService.getAllPosts()
    this._postService.getAllPosts()
      .subscribe(
        (res) => {   
          if(Array.isArray(res)){
            this.postsArray = res
          }
        },
      )


    // const interval$ = interval(1000)

    // interval$
    //   .subscribe(console.log);
    // interval$
    //   .subscribe(console.log)
    // interval$
    //   .subscribe(console.log)
  }

  ngOnDestroy(): void {
    // this.unsubscribe$.next()
    // this.unsubscribe$.complete()
    this._authInterceptor.unsubscribeAll()
  }
}
