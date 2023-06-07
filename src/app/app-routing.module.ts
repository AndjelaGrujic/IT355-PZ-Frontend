import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { QuizStartComponent } from './pages/user/quiz-start/quiz-start.component';
import { InstuctionsOfQuizComponent } from './pages/user/instuctions-of-quiz/instuctions-of-quiz.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },

  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'home',
        component: WelcomeComponent,
      },
      { path: 'profile', component: ProfileComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'view-category', component: ViewCategoriesComponent },
      { path: 'update-category/:cid', component: UpdateCategoryComponent },
      { path: 'view-quiz', component: ViewQuizzesComponent },
      { path: 'add-quiz', component: AddQuizComponent },
      { path: 'update-quiz/:qid', component: UpdateQuizComponent },
      { path: 'add-question/:qid/:qtitle', component: AddQuestionComponent },
      { path: 'view-question/:qid/:qtitle', component: ViewQuizQuestionsComponent },
      { path: 'update-question/:quesId', component: UpdateQuestionComponent },
    ],
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: 'home',
        component: WelcomeUserComponent,
      },
      {path: 'profile',component:ProfileComponent},
      { path: ':cid', component: LoadQuizComponent, },
      { path: 'instructions/:qid', component: InstuctionsOfQuizComponent, },


      
    ],
  },
  {
    path: 'quizStart/:qid',
    component: QuizStartComponent,
    canActivate: [UserGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
