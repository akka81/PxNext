import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import './Environment.ts';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './App/Components/App.Component';
import { LoadingSpinnerService } from './App/Services/loadingSpinner.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        InputsModule,
        RouterModule.forRoot([
            { path: 'build/index.html', component:AppComponent }
        ])
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        LoadingSpinnerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }



