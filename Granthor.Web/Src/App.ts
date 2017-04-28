import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';
import './Environment.ts';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './App/Components/App.Component';
import { TestComponent } from './App/Components/test.component';
import { Test1Component } from './App/Components/test1.component';
import { LoadingSpinnerService } from './App/Services/loadingSpinner.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        InputsModule,
        RouterModule.forRoot([
            { path: 'test', component: TestComponent },
            { path: 'test1', component: Test1Component }
        ])
    ],
    declarations: [
        AppComponent,
        TestComponent,
        Test1Component
    ],
    providers: [
        LoadingSpinnerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }



