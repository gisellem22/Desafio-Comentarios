import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service'
import { Comment } from '../../models/comment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments = {} as Comment;

  constructor(public commentsService: CommentsService) { }

  ngOnInit() {
  }

  addComment(text) {
    if(this.comments.comment !=="" && this.comments.comment !==undefined) {
      this.commentsService.addComment(this.comments)
      text ="";
      console.log("soy text",text)
    }
  }
}
