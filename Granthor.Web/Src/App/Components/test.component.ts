import { Component} from '@angular/core';
import { environment } from '../../Environment';
import { LoadingSpinnerService } from '../Services/loadingSpinner.service';


@Component({
    selector: 'test-comp',
    templateUrl: '../Views/TestView.html'
})
export class TestComponent {

   
    constructor(private loadingSpinnerService: LoadingSpinnerService) {
    }


    onClick() {
        this.loadingSpinnerService.showLoader(true);
    }
}