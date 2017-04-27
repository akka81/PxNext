import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingSpinnerService {
    // Observable string sources
    private spinnerStatus = new Subject<boolean>();
  
    spinnerStatus$ = this.spinnerStatus.asObservable();
   
    showLoader(status: boolean){
        this.spinnerStatus.next(status);
    }
}