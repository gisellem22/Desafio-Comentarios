import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Comment } from '../models/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: Observable<Comment[]>;
  commentsCollection;
  commentDoc;

  constructor(public db: AngularFirestore) {
    this.comments = this.db.collection("comments").valueChanges();
   }
   getComments() {
     return this.comments;
   }
}
