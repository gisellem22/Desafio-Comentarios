import { Component, OnInit } from '@angular/core';

import { CommentsService } from '../../services/comments.service'
import { Comment } from '../../models/comment'


@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {
  comments = {} as Comment;

  constructor(public commentsService: CommentsService) { }

  ngOnInit() {
  }

  addComment() {
    if(this.comments.comment !=="" && this.comments.comment !==undefined) {
      this.commentsService.addComment(this.comments)
      this.comments = {} as Comment;
    }
  }

}
