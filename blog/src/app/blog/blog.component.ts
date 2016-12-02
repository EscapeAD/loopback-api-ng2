import { Component, OnInit } from '@angular/core';
import { PostService } from "./post.service";
import { Post } from "./post";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title: string = 'Blog';
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

}
