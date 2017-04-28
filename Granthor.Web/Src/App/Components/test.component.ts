import { Component} from '@angular/core';
import { environment } from '../../Environment';
import { LoadingSpinnerService } from '../Services/loadingSpinner.service';


@Component({
    selector: 'test-comp',
    templateUrl: '../Views/TestView.html'
})
export class TestComponent {

    public maskedValue: string;
    public sliderValue: number = 5;
    public numericValue: number = 5;
    public switchValue: boolean = false;
    public min: number = 0;
    public max: number = 10;
    public smallStep: number = 1;
  
   
    constructor(private loadingSpinnerService: LoadingSpinnerService) {
    }


    onClickLoader() {
        this.loadingSpinnerService.showLoader(true);
    }


    onClick() {
        environment.utils.writeSuccess(this.sliderValue.toString());
        environment.utils.writeSuccess(this.numericValue.toString());
        environment.utils.writeSuccess(this.switchValue == true ? "true" : "false");
    }
}