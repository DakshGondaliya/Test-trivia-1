import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { App } from "./app";
import { Main, Thanks } from "./app/containers";
import { AppBar, AnswerRow } from "./app/ui";
import { routes } from "./app/routes";

@NgModule({
  declarations: [
    App,
    Main,
    Thanks,
    AppBar,
    AnswerRow
  ],
  imports: [
    BrowserModule,
    routes
  ],
  bootstrap: [App]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
