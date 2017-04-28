import { Component } from '@angular/core';
import { environment } from '../../Environment';
import { LoadingSpinnerService } from '../Services/loadingSpinner.service';


@Component({
    selector: 'test1-comp',
    templateUrl: '../Views/Test1View.html'
})
export class Test1Component {


    constructor(private loadingSpinnerService: LoadingSpinnerService) {
    }


    onClick() {
        this.loadingSpinnerService.showLoader(true);
    }
}