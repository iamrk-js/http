import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { PostComponent } from './shared/components/post/post.component';
import { CreatePostComponent } from './shared/components/create-post/create-post.component';

const routes: Routes = [
  {path : '', component : DashboardComponent},
  {path : 'posts', component : PostsComponent},
  {path : 'posts/:id', component : PostComponent},
  {path : 'posts/:id/edit', component : CreatePostComponent},
  {path : 'createpost/:id', component : CreatePostComponent},
  {path : 'createpost', component : CreatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
