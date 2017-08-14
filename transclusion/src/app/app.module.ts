import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CComponent } from './c.component';
import { BComponent } from './b.component';
import { AComponent } from './a.component';
import { ArticleComponent } from './article/article.component';
import { JournalComponent } from './journal/journal.component';

@NgModule({
  declarations: [
    AppComponent,
    CComponent,
    BComponent,
    AComponent,
    ArticleComponent,
    JournalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
