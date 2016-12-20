import { Component } from '@angular/core';

@Component({
  selector: 'main-container',
  template: `
    <app-bar></app-bar>
    <main class="mdl-layout__content">
      <div class="mdl-card mdl-cell mdl-cell--6-col center">
        <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
          <h5>{{question}}</h5>
        </div>
        <div *ngFor="let answer of answers" class="mdl-card__actions">
          <answer-row [answer]="answer"></answer-row>
        </div>
      </div>
    </main>
  `
})
export class Main {
  question = "I have three apples. If you take away two from me, how many do you have?";
  answers = [
    {title: "One", correct: false},
    {title: "Two", correct: true},
    {title: "Tree", correct: false}
  ];
}
