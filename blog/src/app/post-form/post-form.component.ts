import { Component, OnInit } from '@angular/core';
import { Post } from '../blog/post';
import { PostService } from '../blog/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post = new Post();

  errorMessage = '';

  constructor(private postService: PostService,
              private router: Router
             ) { }

  ngOnInit() {
  }
 // on form submit
  onSubmit(){
    console.log(this.post);

    // post this data to service
    this.postService.createPost(this.post).subscribe(res => {
      //successful post
      console.log(res.id);

      //direct to view post
      this.router.navigate(['/blog', res.id]);

    }, err => {
      console.log(err);
      this.errorMessage = 'an error saving the post';
    });
  }

}
