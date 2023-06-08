// use 'bind' to 'curry' functions
// The technique of binding a function to a subset of its arguments is known as
// 'currying' named after logician Haskell Curry


function simpleURL(protocol, domain, path) {
    return protocol + "://" + domain + "/" + path;
}

var siteDomain = "mport.nz";

var paths = ["login", "account", "forgot-password", "reset-password", "delete"];

// notice in ur anon function, protocol and domain don't change.
// the first two arugments to simpleURL are fixed for each iteration and only
// the third argument is needed.
var urls = paths.map(function(path) {
    return simpleURL("http", siteDomain, path);
});

// we can use the 'bind' method to construct the function automatically
var urls = paths.map(simpleURL.bind(null, "http", siteDomain));
// the call to 'simpleURL.bind produces a new function that delegates to simpleURL
