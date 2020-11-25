(function() {
    'use strict';
    // Your code here...
    console.log('Eli: Tampermonkey starts...', window.location);

    const TheKeyword=['Enroll ', 'ENROLL ', 'Go to course'];

    function findKeywordToClick(keyword) {
        console.log('Eli: findKeywordToClick...', keyword);

        let button = null;
        // button = $("button:contains('Enroll Now')");
        // button = $("button:contains('Enroll ')");
        button = $("button:contains('" + keyword + "')");
        if(button && button.length>0){
            console.log('Eli: clicking button', button);
            button.click();
        }

        let anchor = null;
        // anchor = $("a:contains('Enroll Now')");
        // anchor = $("a:contains('Enroll ')");
        anchor = $("a:contains('" + keyword + "')");
        if(anchor && anchor.length>0){
            if(anchor[0].innerText.startsWith(keyword)) {
                console.log('Eli: setting window.location:', anchor[0].href);
                window.location = anchor[0].href;
                // window.location.redirect(anchor[0].href);
            }
        }
    };

    window.onload = function() {
        console.log('Eli: the page has finished loading...');

        setInterval(function(){
            TheKeyword.forEach(keyword=>{
                findKeywordToClick(keyword);
            });
        }, 5000);

    };
})();
