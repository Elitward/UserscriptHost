(function() {
    'use strict';

    // Your code here...
    console.log('Eli: Haha...');

    $(window).load(function () {
        // run code
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

        // to match: https://udemycoupon.onlinecourses.ooo/*
        $('a').filter(function(index) {
            // const txt = $(this).text();
            // const ans = txt.includes('https://www.udemy.com');
            // return ans;
            const url = this.href;
            if(url.includes('https://www.udemy.com/')){
                window.location.href = url;
                return true;
            } else {
                return false;
            }
        }).click();
    });
})();