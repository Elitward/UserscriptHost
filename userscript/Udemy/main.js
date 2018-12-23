(function() {
    'use strict';
    // Your code here...
    console.log('Eli: Tampermonkey starts...', window.location);

    window.onload = function() {
        console.log('Eli: the page has finished loading...');

        let button = null;
        // button = $("button:contains('Enroll Now')");
        button = $("button:contains('Enroll ')");
        if(button && button.length>0){
            console.log('Eli: clicking button', button);
            button.click();
        }

        let anchor = null;
        // anchor = $("a:contains('Enroll Now')");
        anchor = $("a:contains('Enroll ')");
        if(anchor && anchor.length>0){
            console.log('Eli: setting window.location:', anchor[0].href);
            // window.location = anchor[0].href;
            window.location.redirect(anchor[0].href);
        }
    };
})();