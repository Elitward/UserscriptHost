//-----------------------
//   [Bill result]
// Thank you for bidding YeHua Deng
// You are the current high bidder!
// You may still be outbid if someone places a bid higher than 1 or if 'Buy It' is available.
//-----------------------

//-----------------------
// Bid Confirmation Auction Number: 2035150
// Your bid was less than the minimum bid amount. Your bid has automatically been changed to $86.00
//-----------------------

(function() {
    'use strict';

    const Targets = [
        //-------
        { // Qardio (B100-IOW) Base Bluetooth Smart Scale and Body Analyzer
            id: 2053183,
            maxPrice: 15,
            autoAdjust: false
        },
        { // Qardio (B100-IOW) Base Bluetooth Smart Scale and Body Analyzer
            id: 2052935,
            maxPrice: 15,
            autoAdjust: false
        },
        { // Apple MP1U2LL/A iPad 5th Gen 32GB WiFi + Cellular - Space Gray
            id: 2052917 ,
            maxPrice: 320.01,
            autoAdjust: false
        },
        //-------
    ];

    const MyUsername = 'Elitward';

    const BiddingInAdvance = 5; // 5 second
    const LastRefreshInAdvance = 30; // 30 second
    const SessionRefreshPeriod = 10*60; // second

    // Your code here...

    const XPath = {
        details: {
            itemName:   '//*[@id="detail-title"]/h3/text()',
            itemId:     '//*[@id="detail-title"]/span/text()',
            currentBid: '//*[@id="detail"]/div[2]/div[2]/span[2]/span',
            timeLeft:   '//*[@id="detail"]/div[2]/div[5]/span[2]/font/translate/span',
            endTime:    '//*[@id="detail"]/div[2]/div[6]/span[2]',
            highBidder: '//*[@id="detail"]/div[2]/div[8]/span[2]',
            bidInput:   '//*[@id="bid"]/form/div[3]/span[2]/input',
            bidButton:  '//*[@id="bid"]/form/div[4]/span[2]/input',
            watchLink:  '//*[@id="detail-title"]'
        },
        bidding: {
            itemName:   '//*[@id="bid"]/font/p[2]/text()',
            itemId:     '//*[@id="bid"]/p/font/font/a',
            maxBid:     '//*[@id="bid"]/font/div[2]/span[2]',
            bidButton:  '//*[@id="bid"]/font/form/p/input[1]',
            autoChange: '//*[@id="bid"]/font/p[1]/translate/span/text()'
        },
        confirm: {
            currentHighBidder: '//*[@id="confirmation"]/div/p/span',
            itemHref:          '//*[@id="confirmation"]/font/p[1]/a'
        }
    };

    const detailsUrlRegEx = new RegExp('^https://bbyc.dtdeals.com/index.cfm/auction/detail/[0-9]'); // e.g. https://bbyc.dtdeals.com/index.cfm/auction/detail/2035768
    const biddingUrlRegEx = new RegExp('^https://bbyc.dtdeals.com/index.cfm/bid$'); // e.g. https://bbyc.dtdeals.com/index.cfm/bid
    const confirmUrlRegEx = new RegExp('^https://bbyc.dtdeals.com/index.cfm/bid/confirm$'); // e.g. https://bbyc.dtdeals.com/index.cfm/bid/confirm

    function getUrl() {
        let url=location.href;
        let urlLastChar = url.substr(url.length - 1);
        if(urlLastChar==='/') {
            url = url.slice(0, url.length-1); // remove last slash, if there is
        }
        return url;
    };

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    function getElementText(xpath) {
        let element = getElementByXpath(xpath);
        if(element) {
            let text = null;
            if(element.wholeText) {
                text = element.wholeText;
            }else if(element.innerText) {
                text = element.innerText;
            }
            return text;
        }
        return null;
    };

    function getElementInteger(xpath) {
        let element = getElementByXpath(xpath);
        if(element) {
            let text = null;
            if(element.wholeText) {
                text = element.wholeText;
            }else if(element.innerText) {
                text = element.innerText;
            }
            if(text) {
                return text.replace(/[^0-9]/g, '');
            }
        }
        return null;
    };

    function getElementHref(xpath) {
        let element = getElementByXpath(xpath);
        return element.href;
    }

    function getFloat(text) {
        let num = text.replace(/[^0-9.]/g, '');
        return parseFloat(num);
    }

    function getNumberBefore(text, keyword) {
        let parts = text.split(' ');
        let key = keyword.toLowerCase();
        for (let i = 1; i < parts.length; i++) {
            if(parts[i].toLowerCase().startsWith(key)) {
                let ans = parts[i-1];
                return parseInt(ans);
            }
        }
        return 0;
    }

    function parseSecondLeft(text) {
        let ans = 0;
        if (text) {
            let day = getNumberBefore(text, 'day');
            let hou = getNumberBefore(text, 'hour');
            let min = getNumberBefore(text, 'minute');
            let sec = getNumberBefore(text, 'second');
            ans =
                day * (24*60*60) +
                hou * (60*60) +
                min * (60) +
                sec;
        }
        return ans;
    }

    function matchUsername(bidder) {
        let myname = MyUsername.slice(0, 2) + '**' + MyUsername.slice(MyUsername.length-2);
        return (myname == bidder) ? true : false;
    }

    function matchTarget(id) {
        if (typeof id === 'string' || id instanceof String) {
            id = parseInt(id);
        }

        for (let i = 0; i < Targets.length; i++) {
            if(Targets[i].id===id && Targets[i].maxPrice>0) {
                return Targets[i];
            }
        }
        return null
    }

    function appendGoogleCalendar() {
        let targetComponent = getElementByXpath(XPath.details.watchLink);
        if(targetComponent && secondLeft>0) {
            let element = document.createElement ('a');
            let time1 = (new Date(Date.now() + (secondLeft-90)*1000)).toISOString().replace(/-|:|\.\d\d\d/g,"");
            let time2 = (new Date(Date.now() + (secondLeft-30)*1000)).toISOString().replace(/-|:|\.\d\d\d/g,"");
            let itemUrl = location.href;
            element.innerHTML = 'Calendar';
            element.target="_blank";
            element.href = "http://www.google.com/calendar/event?" +
                "action=TEMPLATE" +
                "&text=[2nd Turn]" + itemName +
                "&dates=" + time1 + '/' + time2 +
                "&details=" + itemUrl
                "&location=2nd+Turn" +
                "&sf=true";
            targetComponent.append(element);
            // console.log("Eli:appendGoogleCalendar->", element.href);
        }
    }

    function initialBid(info) {
        console.log('# initialBid.', info, (new Date()).toString());
        if (info && info.maxPrice) {
            stopAllTimers();

            let bidInput = getElementByXpath(XPath.details.bidInput);
            let bidButton = getElementByXpath(XPath.details.bidButton);
            bidInput.value = info.maxPrice;
            bidButton.click();
        }
    }

    function placeBid(info) {
        console.log('# placeBid.', info, (new Date()).toString());
        if (info && info.maxPrice) {
            stopAllTimers();

            let maxBid = getFloat( getElementText(XPath.bidding.maxBid) );
            let autoChange = getElementText(XPath.bidding.autoChange);
            let bidButton = getElementByXpath(XPath.bidding.bidButton);

            if(info.maxPrice === maxBid) {
                console.log('# placeBid on right price ', maxBid);
                bidButton.click();
            }

            if(info.autoAdjust===true && autoChange && autoChange.includes('Your bid was less than the minimum bid amount. Your bid has automatically been changed to')) {
                console.log('# placeBid on auto changed price ', maxBid);
                bidButton.click();
            }
        }
    }

    function checkCurrentHighBidder() {
        let highBidder = getElementText(XPath.confirm.currentHighBidder);
        if (highBidder && highBidder.includes('You are the current high bidder!')) {
            return true;
        } else {
            return false;
        }
    }

    function stopAllTimers(){
        console.log('# stopAllTimers.');
        if(biddingTimer) {
            clearTimeout(biddingTimer);
        }
        if(lastRefreshTimer) {
            clearTimeout(lastRefreshTimer);
        }
        if(sessionTimer) {
            clearTimeout(sessionTimer);
        }
    }

    console.log('# Now Time ', (new Date()).toString());

    var url = getUrl();
    console.log('# URL{ ' + url + ' }');

    var itemName = null;
    var itemId = null;
    var currentBid = null;
    var timeLeft = null
    var endTime = null;
    var highBidder = null;

    var target = null;

    var secondLeft = null;

    var biddingTimer = null;
    var lastRefreshTimer = null;
    var sessionTimer = null;

    // avoid session timeout
    console.log('# Refresh to keep session after ' + (SessionRefreshPeriod/60).toFixed() + ' (mins)');
    sessionTimer = setTimeout(function(){
        location.reload();
    }, SessionRefreshPeriod*1000);

    if (detailsUrlRegEx.test(url)) {
        console.log('# This is an item info page.');

        itemName = getElementText(XPath.details.itemName);
        itemId = getElementInteger(XPath.details.itemId);
        console.log('# Item Name:', itemName);
        console.log('# Item ID:', itemId);

        currentBid = getFloat( getElementText(XPath.details.currentBid) );
        timeLeft = getElementText(XPath.details.timeLeft);
        endTime = getElementText(XPath.details.endTime);
        highBidder = getElementText(XPath.details.highBidder);

        secondLeft = parseSecondLeft(timeLeft);

        console.log('# Item CurrentBid:', currentBid);
        console.log('# Item TimeLeft:', timeLeft, "=>", secondLeft);
        console.log('# Item EndTime:', endTime);
        console.log('# Item HighBidder:', highBidder);

        if (secondLeft>0) {
            // debugger;

            target = matchTarget(itemId);
            if (target) {
                console.log('# Target:', target);

                let secToLastRefrsh = secondLeft - LastRefreshInAdvance;
                if (secToLastRefrsh>=0) { // set last refresh
                    console.log('# Last refresh after ' + (secToLastRefrsh/60).toFixed(2) + ' (min) = [' + secToLastRefrsh + '(sec)]');
                    lastRefreshTimer = setTimeout(function(){
                        location.reload();
                    }, secToLastRefrsh*1000);
                }

                if (matchUsername(highBidder)) {
                    console.log('# I am the current high bidder!');
                } else {
                    let secToBid = secondLeft - BiddingInAdvance;
                    if (secToBid>=0) {
                        console.log('# To Bid after ' + (secToBid/60).toFixed(2) + ' (min) = [' + secToBid + '(sec)]');
                    } else {
                        secToBid=0; // since not finished always try to bid
                    }
                    biddingTimer = setTimeout(function(){
                        initialBid(target);
                    }, secToBid*1000);
                }
            }
        } else {
            console.log('# Bidding has finished.');
        }

        appendGoogleCalendar();
    }

    if (biddingUrlRegEx.test(url)) {
        console.log('# This is an bidding page.');

        itemName = getElementText(XPath.bidding.itemName);
        itemId = getElementInteger(XPath.bidding.itemId);
        console.log('# Item Name:', itemName);
        console.log('# Item ID:', itemId);

        target = matchTarget(itemId);
        if (target) {
            placeBid(target);
        }
    }

    if (confirmUrlRegEx.test(url)) {
        console.log('# This is an confirm page.');

        if (checkCurrentHighBidder()) {
            // go back to detail page
            let href = getElementHref(XPath.confirm.itemHref);
            if (href) {
                window.location.href = href;
            }
        } else {
            console.log('# Something went wrong !?');
            stopAllTimers(); // stay here to check page content
        }
    }

})();


function test(){
    console.log('eli: this is test method.');
}