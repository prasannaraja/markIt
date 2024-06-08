import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkFormComponent } from './bookmark-form/bookmark-form.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';

// Redirect unauthorized users to the login page
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  {
    path: 'bookmarks',
    component: BookmarkListComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'add-bookmark',
    component: BookmarkFormComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: '', redirectTo: '/bookmarks', pathMatch: 'full' },
  { path: '**', redirectTo: '/bookmarks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
