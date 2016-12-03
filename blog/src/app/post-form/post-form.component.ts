import { Component, OnInit } from '@angular/core';
import { Post } from '../blog/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post = new Post();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.post);
  }

}
