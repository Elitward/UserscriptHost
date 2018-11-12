(function() {
    'use strict';

    // Your code here...
    let anchor = $("a:contains('Start Learning Now')");
    if(anchor && anchor.length>0){
        window.location = anchor[0].href;
    }

    let button = $("button:contains('Yes, enroll')");
    if(button && button.length>0){
        button.click();
    }

})();