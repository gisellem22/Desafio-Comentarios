import { Component, OnInit } from '@angular/core';

import { CommentsService } from '../../services/comments.service'
import { Comment } from '../../models/comment'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];

  constructor(public commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService.getComments().subscribe(comments => {
      this.comments = comments;
      console.log(comments)
    })
  }

  


  delete(comment) {
    this.commentsService.deleteComment(comment)
  }
}
