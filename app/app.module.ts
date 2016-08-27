/**
 * Created by ititov on 27/08/2016.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {SearchComponent} from "./search.component";
import {IssuesComponent} from "./issues.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        IssuesComponent,
        SearchComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}