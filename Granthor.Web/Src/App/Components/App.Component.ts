import { Component, OnInit  } from '@angular/core';
import { environment } from '../../Environment';
import { LoadingSpinnerService } from '../Services/loadingSpinner.service';

import '../../Styles/style.css';

@Component({
    selector: 'granthor-app',
    templateUrl: '../Views/RootView.html'
})
export class AppComponent implements OnInit {

    public loaderStatus: boolean = false;
   

    constructor(private loadingSpinnerService: LoadingSpinnerService)
    {
    }


    ngOnInit() {

        this.loadingSpinnerService.spinnerStatus$.subscribe((val: boolean) => {
            this.loaderStatus = val;
        })

    }

    
}