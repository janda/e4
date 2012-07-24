/**
 * Function checks connectivity to the web server.
 */
function checkNetworkStatus() {
    if (navigator.onLine) {
        // The browser lies, we may not be online or able to access the web site.
        // Check to see if we are really online by making a call for a static JSON resource.
        $.ajaxSetup({
            async: true,
            cache: false,
            context: $("#status"),
            dataType: "json",
            error: function (req, status, ex) {
                console.log("Error: " + ex);
                // We might not be technically "offline" if the error is not a timeout, but
                // we will treat it as if we're offline.
                showNetworkStatus(false);
            },
            success: function (data, status, req) {
                showNetworkStatus(true);
            },
            timeout: 2000,
            type: "GET",
            url: "../js/application/ping.json"
        });
        $.ajax();
    }
    else {
        showNetworkStatus(false);
    }
}

/**
 * Function prints current online/offline status.
 * @param online
 */
function showNetworkStatus(online) {
    if (online) {
        //$("#online_status").html("Online");    	
    }
    else {
        //$("#online_status").html("Offline");
    }

    console.log("Online status: " + online);
}