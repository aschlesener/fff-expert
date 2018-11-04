chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'fabfitfun.com', pathContains: 'add-ons'}
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }])
})
