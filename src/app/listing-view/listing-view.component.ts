import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css'],
})
export class ListingViewComponent {
  blogPosts: any[] = [];
  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage: string = 'Failed to fetch blog posts';
  currentPage: number = 1;
  postsPerPage: number = 9;
  totalPages: number = 10;

  constructor(private blogservice: BlogService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.fetchBlogPosts(this.currentPage);
  }
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.fetchBlogPosts(pageNumber);
  }

  fetchBlogPosts(pageNumber: number) {
    this.isLoading = true;
    this.blogservice.getBlogPosts().subscribe(
      (data: BlogService[]) => {
        this.blogPosts = data;
        this.blogPosts.forEach((blogPost) => {
          blogPost.published_at = this.datePipe.transform(
            blogPost.published_at,
            'dd/MM/yyyy'
          );
        });
        this.totalPages = Math.ceil(this.blogPosts.length / this.postsPerPage);
        this.fetchBlogPostsByPage(this.currentPage);
        this.isLoading = false;
        this.isError = false;
        this.errorMessage = '';
      },
      (error) => {
        this.isError = true;
        this.errorMessage = error.message;
      }
    );
  }
  fetchBlogPostsByPage(pageNumber: number) {
    const startIndex = (pageNumber - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    this.blogPosts = this.blogPosts.slice(startIndex, endIndex);
  }
  onRetryFetch() {
    this.isError = false;
    this.fetchBlogPosts(this.currentPage);
  }

  navigateToPost(url: string) {
    window.open(url, '_blank');
  }
}
