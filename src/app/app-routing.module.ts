import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./pages/login2/login2.module').then(m => m.Login2PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./pages/attendance/attendance.module').then(m => m.AttendancePageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then(m => m.EventsPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-details/event-details.module').then(m => m.EventDetailsPageModule)
  },
  {
    path: 'fees',
    loadChildren: () => import('./pages/fees/fees.module').then(m => m.FeesPageModule)
  },
  {
    path: 'pay-online',
    loadChildren: () => import('./pages/pay-online/pay-online.module').then(m => m.PayOnlinePageModule)
  },
  {
    path: 'assignment',
    loadChildren: () => import('./pages/assignment/assignment.module').then(m => m.AssignmentPageModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('./pages/timetable/timetable.module').then(m => m.TimetablePageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./pages/result/result.module').then(m => m.ResultPageModule)
  },
  {
    path: 'datesheet',
    loadChildren: () => import('./pages/datesheet/datesheet.module').then(m => m.DatesheetPageModule)
  },
  {
    path: 'ask-doubt',
    loadChildren: () => import('./pages/ask-doubt/ask-doubt.module').then(m => m.AskDoubtPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'event-list',
    loadChildren: () => import('./pages/event-list/event-list.module').then( m => m.EventListPageModule)
  },
  {
    path: 'details-page',
    loadChildren: () => import('./pages/details-page/details-page.module').then( m => m.DetailsPagePageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'notification-page',
    loadChildren: () => import('./pages/notification-page/notification-page.module').then( m => m.NotificationPagePageModule)
  },
  {
    path: 'account-setting',
    loadChildren: () => import('./pages/account-setting/account-setting.module').then( m => m.AccountSettingPageModule)
  },
  {
    path: 'student-list',
    loadChildren: () => import('./pages/student-list/student-list.module').then( m => m.StudentListPageModule)
  },
  {
    path: 'code-verification',
    loadChildren: () => import('./pages/code-verification/code-verification.module').then( m => m.CodeVerificationPageModule)
  },
  {
    path: 'subject',
    loadChildren: () => import('./pages/subject/subject.module').then( m => m.SubjectPageModule)
  },
  {
    path: 'chapter-list',
    loadChildren: () => import('./pages/chapter-list/chapter-list.module').then( m => m.ChapterListPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'popup-component',
    loadChildren: () => import('./pages/popup-component/popup-component.module').then( m => m.PopupComponentPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
