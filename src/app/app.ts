import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <router-outlet></router-outlet>
    </div>
  `
})
export class App {}
