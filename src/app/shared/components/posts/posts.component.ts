import { Component, OnInit } from '@angular/core';
import { PostServices } from '../../services/post-services.service';
import { Ipost } from '../../services/model/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsArray: Array<Ipost> = [];
  postArray$ !: Observable<Ipost[]>
  constructor(private _postService: PostServices) { }

  ngOnInit(): void {
    this.postArray$ = this._postService.getAllPosts()
    // this._postService.getAllPosts()
    //   .subscribe(
    //     (res) => {   this.postsArray = res},
    //     (err) => {
    //       console.log(`Somthing went wrong while fetching all Posts`);
    //     }
    //   )
  }

}
