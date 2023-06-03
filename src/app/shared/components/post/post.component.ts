import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServices } from '../../services/post-services.service';
import { Ipost } from '../../services/model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postId !: number;
  postObject !: Ipost;
  constructor(
    private _route: ActivatedRoute,
    private _postService: PostServices
  ) { }

  ngOnInit(): void {
    this.postId = +this._route.snapshot
      .params['id'];
    this._postService.getPost(this.postId)
      .subscribe(
        (res) => {
          this.postObject = res;
        }
      )
  }

  onDelete(id: number) {
    this._postService.deletePost(id)
      .subscribe(
        (res => { console.log(res)}),
        (err) => {console.log(`Somthing went wrong`)}

      )
  }
}
