"use strict";var precacheConfig=[["/index.html","eec4f97c381c9188f4fd8a2d53836a0a"],["/static/css/main.5d16d8e9.css","0393ce362e26aaa42d9d5dfb3d02d26f"],["/static/js/main.499d3f96.js","d85410e98c30c9c15fd2bf3122a51dbf"],["/static/media/NSF_Logo.0f6f085b.png","0f6f085b9b31bff99fd098559a759a5d"],["/static/media/easy.c3ec87a7.png","c3ec87a720931fdc780734c78fa2680d"],["/static/media/endtoend.84514f60.png","84514f60b57f0fa8f4dbf0445ac20b44"],["/static/media/fast.94fb7985.png","94fb798542b7654eed3be71944f22495"],["/static/media/interoperation.2558a942.png","2558a94238b69fb43e7fcef6a8f0501e"],["/static/media/precise.fcfd05a0.png","fcfd05a0049d62620ef86d72924cdc28"],["/static/media/s1.be1fb98e.png","be1fb98e0bf2939c9e44c2d150b952f3"],["/static/media/s2.d37df03f.png","d37df03f5a21b720f133e1d7bcca29b7"],["/static/media/s3.240cb46b.png","240cb46ba528e6b393e4e40dcd2f91fe"],["/static/media/s4.b79f2dc0.png","b79f2dc0cf2628cee3e0afcaa22d0ce9"],["/static/media/s5.0066c9f5.png","0066c9f5fb6311639ceff2d8b1fc8813"],["/static/media/s6.86c1f97a.png","86c1f97abb212a6b0c9b751b6a42a067"],["/static/media/ub.ac8a9d3e.png","ac8a9d3e518e93145081c1c707cf9618"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});