import * as tsr from 'toastr';

class Utils {
    private static instance: Utils;
    
    private constructor() {

        //toastr configuration
        tsr.options.closeButton = true;
        tsr.options.debug =  false;
        tsr.options.newestOnTop = false;
        tsr.options.progressBar = false;
        tsr.options.positionClass = "toast-top-full-width";
        tsr.options.preventDuplicates = false;
        tsr.options.onclick = null;
        tsr.options.showDuration = 300;
        tsr.options.hideDuration = 1000
        tsr.options.timeOut = 5000;
        tsr.options.extendedTimeOut = 1000;
        tsr.options.showEasing = "swing";
        tsr.options.hideEasing = "linear";
        tsr.options.showMethod = "fadeIn";
        tsr.options.hideMethod = "fadeOut";
    }        

    static getInstance() {
        if (!Utils.instance) {
            Utils.instance = new Utils();
        }
        return Utils.instance;
    }

    writeSuccess(mex: string)
    {
        tsr.success(mex);    
    }
}


export class environment
{
    public static utils = Utils.getInstance();
};