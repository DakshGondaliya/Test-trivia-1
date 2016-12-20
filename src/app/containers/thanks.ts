import { Component } from '@angular/core';

@Component({
  selector: 'thank-container',
  template: `
    <app-bar></app-bar>
    <main class="mdl-layout__content">
      <div class="mdl-card mdl-cell mdl-cell--6-col center">
        <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
          <h5>Thank you for your answer!</h5>
        </div>
        <div class="mdl-card__actions">
          <span [routerLink]="['']" class="mdl-button">One more time?</span>
        </div>
      </div>
        </main>
  `
})
export class Thanks {}
