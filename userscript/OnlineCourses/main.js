(function() {
    'use strict';

    // Your code here...
    console.log('Eli: Haha...');
    // var keyword = $("span:contains('Click to Redeem')");
    // var keyword = $("span:contains('Redeem Offer')");
    var keywords = [
        $("span:contains('Click to Redeem')"),
        $("span:contains('Redeem Offer')")
    ];
    keywords.forEach(function(keyword){
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
    });
})();