import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ipost } from '../../services/model/post';
import { PostServices } from '../../services/post-services.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postId !: number;
  postForm !: FormGroup;
  constructor(
    private _route: ActivatedRoute,
    private fb: FormBuilder,
    private _postsService : PostServices,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.createPostForm();
    // this._route.params
    //   .subscribe((params: Params) => {
    //     this.postId = +params['id'];
    //     if(this.postId){
    //       this._postsService.getPost(this.postId)
    //       .subscribe(
    //         (res) => {
    //           console.log(res);
    //           this.postForm.patchValue(res)
    //         }
    //       )
    //     }
    //   })

    this._route.params
        .pipe(
          concatMap((params : Params) => {
            const postId = +params['id'];
            return this._postsService.getPost(postId)
          })
        )
        .subscribe(
          (res) => {
            this.postForm.patchValue(res)
          }
        )
  }

  createPostForm() {
    this.postForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    })
  }

  onPostCreate(){
    if(this.postForm.valid){
      // console.log(`Post Created`, this.postForm.value)
      let postObj = {
        userId : Math.ceil(Math.random() * 10),
        ...this.postForm.value
      }
      this._postsService.createPost(postObj)
        .subscribe(
          res => {
            console.log(res);
            this._router.navigate(['/posts'])
          },
          err => console.log(err)
        )
      // console.log(postObj)
    }
  }

  onUpdatePost(){
    let postObj = {
      ...this.postForm.value,
      id : this.postId,
    }

    console.log(postObj);

    this._postsService.updatePost(postObj)
      .subscribe(
        (res) => {
          console.log(res);
          this._router.navigate(['/posts'])
        },
        (err) => console.log(err)
      )
  }
}
