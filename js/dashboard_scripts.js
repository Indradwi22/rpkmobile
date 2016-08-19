/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
     document.addEventListener("backbutton", function(e){
            navigator.app.exitApp();
        }, false);
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
