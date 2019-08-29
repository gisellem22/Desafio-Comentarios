import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Comment } from '../models/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentsCollection: AngularFirestoreCollection<Comment>;
  comments: Observable<Comment[]>;
  commentDoc: AngularFirestoreDocument<Comment>;

  constructor(public db: AngularFirestore) {
    this.commentsCollection = this.db.collection("comments"); 
   }
   getComments() {
    this.comments = this.commentsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a=> {
        const data = a.payload.doc.data() as Comment;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
     return this.comments;
   }
   addComment (comment: Comment) {
     this.commentsCollection.add(comment)
   }

   deleteComment(comment: Comment) {
     this.commentDoc = this.db.doc(`comments/${comment.id}`);
     this.commentDoc.delete();
   }
}
