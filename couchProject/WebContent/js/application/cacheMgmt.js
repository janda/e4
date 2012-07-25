/**
 * Add listeners to the methods associated with
 * the offline cache object.
 */
function logCacheEvents() {
	
	var cache = window.applicationCache;

    cache.addEventListener("cached", function () {
        console.log("All resources for this web app have now been downloaded.");
    }, false);
    cache.addEventListener("checking", function () {
        console.log("Checking manifest.");
    }, false);
    cache.addEventListener("downloading", function () {
        console.log("Starting download of cache files.");
    }, false);
    cache.addEventListener("error", function (e) {
        console.log("There was an error in the manifest, downloading cache files or you're offline: " + e);
    }, false);
    cache.addEventListener("noupdate", function () {
        console.log("There was no update needed.");
    }, false);
    cache.addEventListener("progress", function () {
        console.log("Downloading cached files.");
    }, false);
    cache.addEventListener("updateready", function () {        
        console.log("Updated cache is ready.");
        window.location.reload(true); //reload to force using the new cache
    }, false);
    
}