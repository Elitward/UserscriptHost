(function() {
    'use strict';

    // Your code here...
    var keyword = $("span:contains('Redeem Offer')");
    if(keyword){
        console.log('Eli: located keyword = ', keyword.text());
        var anchor = keyword.closest('a');
        var url = anchor.attr("href");
        console.log('Eli: url=', url);
        if(url){
            // debugger;
            window.open(url,"_self");
        }
    }
})();