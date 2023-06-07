import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css'],
})
export class LoadQuizComponent implements OnInit {
  cid: any;
  quizzes: any;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cid = params['cid'];
      if (this.cid == 'all') {
        this.quizService.getActiveQuizzes().subscribe(
          (data) => {
            this.quizzes = data;
            console.log(this.quizzes);
          },
          (error) => {
            console.log(error);
            alert('Could not load');
          }
        );
      } else {
        this.quizService.getActiveQuizzesOfCategory(this.cid).subscribe((data) => {
          this.quizzes = data;
        });
      }
    });
  }
}
