import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Answer } from "../store";

@Component({
  selector: 'answer-row',
  template: `
    <span (click)="onAnswer(answer)" class="mdl-button mdl-cell--8-col answer">
      {{answer.title}}
    </span>
    <span [ngClass]="setClasses(answer)" class="hide">
      {{answer.correct ? 'Correct': 'Wrong Answer'}}
    </span>
  `,
  styleUrls: ['app/ui/answer-row.css']
})
export class AnswerRow {
  constructor(private router: Router) {
  }
  recentlyClicked: boolean = false;
  @Input() answer: Answer;

  setClasses(answer: Answer) {
    return {
      show: this.recentlyClicked,
      correct: answer.correct,
      incorrect: !answer.correct
    }
  }

  onAnswer(answer: Answer) {
    this.recentlyClicked = true;
    setTimeout(
      () => {
        this.recentlyClicked = false;
        if (answer.correct) {
          this.router.navigate(['thanks']);
        }
      }, 500
    );
  }
}