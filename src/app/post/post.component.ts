import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
   
  //http = inject(HttpClient);

  private postService = inject(PostService)
  posts: any=[];

  ngOnInit(): void {
    //this.fetchPosts();

    this.loadPost();
  }
  
  // fetchPosts(){
  //   this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //   .subscribe((posts:any) => {
  //     console.log(posts);
  //     this.posts = posts;
  // });

  // }

  // loadPost(){
  //   this.postService.getPost().subscribe((posts : any) => {
  //     console.log(posts);
  //     this.posts = posts;
  //   })
  // }

  loadPost(){
    this.postService.getPost().subscribe({
      next: (posts:any) => {
        this.posts = posts;
        console.log("fetch Data successfully")
      },
      error: (error) => console.log('error fetching post', error)
      });
  }

}