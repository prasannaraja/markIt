import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  SnapshotAction,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private db: AngularFireDatabase) {}

  getBookmarks(): Observable<any[]> {
    return this.db
      .list('bookmarks')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c: SnapshotAction<any>) => ({
            key: c.payload.key,
            ...c.payload.val(),
          }))
        )
      );
  }

  addBookmark(bookmark: any) {
    this.db.list('bookmarks').push(bookmark);
  }

  updateBookmark(key: string, bookmark: any) {
    this.db.list('bookmarks').update(key, bookmark);
  }

  deleteBookmark(key: string) {
    this.db.list('bookmarks').remove(key);
  }
}
