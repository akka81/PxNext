import { Component, OnInit  } from '@angular/core';
import { environment } from '../../Environment';
import { LoadingSpinnerService } from '../Services/loadingSpinner.service';

import '../../Styles/style.css';

@Component({
    selector: 'granthor-app',
    templateUrl: '../Views/RootView.html'
})
export class AppComponent implements OnInit {

    public maskedValue: string;
    public sliderValue: number = 5;
    public numericValue: number = 5;
    public switchValue: boolean = false;
    public min: number = 0;
    public max: number = 10;
    public smallStep: number = 1;
    public loaderStatus: boolean = false;


    constructor(private loadingSpinnerService: LoadingSpinnerService)
    {
    }


    ngOnInit() {

        this.loadingSpinnerService.spinnerStatus$.subscribe((val: boolean) => {
            this.loaderStatus = val;
        })

    }

    onClick() {
        environment.utils.writeSuccess(this.sliderValue.toString());
        environment.utils.writeSuccess(this.numericValue.toString());
        environment.utils.writeSuccess(this.switchValue == true ? "true" : "false");
    }
}