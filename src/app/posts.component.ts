import { Component, OnInit } from "@angular/core";
import { AppError } from "./common/app-error";
import { BadInputError } from "./common/badinput-error";
import { NotFoundError } from "./common/notfound-error";
import { PostsService } from "./posts.service";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html'
})

export class PostsCompoment implements OnInit {
    posts: any;
    newPost: string;
    constructor(private postsService: PostsService) {

    }
    ngOnInit() {
        this.getPosts();
    }
    getPosts() {
        this.postsService.getAll()
            .subscribe((response) => {
                this.posts = response;
            });
    }
    createPost() {
        let post = { title: this.newPost };
        this.postsService.create(post)
            .subscribe(
                (response: Response) => {
                    this.posts.splice(0, 0, response);
                },
                (error: AppError) => {
                    if (error instanceof BadInputError) {
                        alert('This post already exists');
                    }
                    else throw error;
                });
        this.newPost = '';
    }
    updatePost(post) {
        this.postsService.update(post)
            .subscribe(
                (response: Response) => {
                    console.log(response);
                });
    }
    deletePost(post) {
        this.postsService.delete(post.id)
            .subscribe(
                (response: Response) => {
                    console.log(response);
                },
                (error: AppError) => {
                    if (error instanceof NotFoundError) {
                        alert('This post has already been deleted..');
                    }
                    else throw error;

                });
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1)
    }
}