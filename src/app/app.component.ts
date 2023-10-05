import { Component, OnInit } from '@angular/core';
import { PostServices } from './shared/services/post-services.service';
import { Ipost } from './shared/services/model/post';
import { LoaderService } from './shared/services/loader.service';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http';
  posts : Array<Ipost> = [];
  constructor(
    private _postService : PostServices,
    private _loderService : LoaderService) {

  }
  isLoading !: boolean;
  of$ = of(1,2,3,4,5)
  ngOnInit(): void {
    
    // this.of$
    //   .pipe(
    //     tap(num => console.log(`Before Maping ${num}`)),
    //     map((num) => num * 2),
    //     tap(num => console.log(`After mapping value is ${num}`)),
    //   )
    //   .subscribe(
    //     /// 
    //   )
    
  }
}
