import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.scss',
})
export class BookmarkListComponent {
  bookmarks$: Observable<any[]>;

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarks$ = new Observable<any[]>();
  }

  ngOnInit() {
    //this.bookmarks$ = this.bookmarkService.getBookmarks();
    this.bookmarks$ = this.bookmarkService
      .getBookmarks()
      .pipe(
        map((bookmarks) =>
          bookmarks.sort((a, b) => a.title.localeCompare(b.title))
        )
      );
  }

  deleteBookmark(key: string) {
    this.bookmarkService.deleteBookmark(key);
  }
}
