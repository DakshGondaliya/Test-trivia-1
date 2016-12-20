import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  template: `
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span [routerLink]="['']" class="mdl-layout-title">Infinite trivia</span>
        </div>
      </header>
  `
})
export class AppBar {}
