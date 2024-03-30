import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(private blogsevice: BlogService) {}

  ngOnInit() {
    this.blogsevice.getBlogPosts().subscribe((posts) => {
      this.blogPosts = posts;
    });
  }
}
