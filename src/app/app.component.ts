import { Component, OnInit } from '@angular/core';
import { PostServices } from './shared/services/post-services.service';
import { Ipost } from './shared/services/model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http';
  posts : Array<Ipost> = [];
  constructor(private _postService : PostServices) {

  }
  ngOnInit(): void {
    // this._postService.getAllPosts()
    //   .subscribe(
    //     (res) => {
    //       console.log(res)
    //       this.posts = res;
    //     }
    //   )
  }
}
