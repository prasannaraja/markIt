import { Component } from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrl: './bookmark-form.component.scss',
})
export class BookmarkFormComponent {
  title: string;
  url: string;
  tags: string;

  constructor(private bookmarkService: BookmarkService) {
    this.title = '';
    this.url = '';
    this.tags = '';
  }

  addBookmark() {
    if (this.title && this.url && this.tags) {
      const tagsArray = this.tags.split(',').map((tag) => tag.trim());
      this.bookmarkService.addBookmark({
        title: this.title,
        url: this.url,
        tags: tagsArray,
      });
      this.title = '';
      this.url = '';
      this.tags = '';
    }
  }
}
