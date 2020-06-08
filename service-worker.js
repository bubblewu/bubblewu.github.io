/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","d56d5adbf46b4a786dcca9ba712fd95e"],["about/index.html","c0203eaaef85c369280f43c484e9c1b9"],["adb/debug/index.html","d561557b7c92c76d412634094cc49cb2"],["adb/index.html","15eadd2494d079789eeea21b2238eb13"],["adb/installapk/index.html","b35ebf4213aea7b8452d1b1df3da30b9"],["adb/pm/index.html","98ea98751ed62611d812f99fab26f267"],["adb/sdk/index.html","92bb66b1058efd24d2a5193cebddcdf6"],["archives/2020/05/index.html","bffc6f1d9c74056f6bd001464f134093"],["archives/2020/05/page/2/index.html","ad6c8cad8598a20383f4946ef5a68ea2"],["archives/2020/05/page/3/index.html","0962b7e4ff8a2004eb168f0a97fa09f9"],["archives/2020/06/index.html","375491140720016c15e38d528e76ab1b"],["archives/2020/index.html","7919e5487a079098493a09dd59f1128c"],["archives/2020/page/2/index.html","0348a5fc6c6b27cfa63a995c1a66af26"],["archives/2020/page/3/index.html","da14b343575018013f0d3bb7d6806138"],["archives/index.html","f0147dff467a9e42fc8d0cb541f88e0c"],["archives/page/2/index.html","f0147dff467a9e42fc8d0cb541f88e0c"],["archives/page/3/index.html","f0147dff467a9e42fc8d0cb541f88e0c"],["categories/Charles/index.html","7f2c869ecf7040f8a9c3933778fb507f"],["categories/Git/index.html","3586ae54b1af06f206c81401608e15d7"],["categories/Interview/index.html","ecc43325f9a7446df641469e1eb9a59f"],["categories/Jenkins/index.html","ecb1432cf23234df9b9e39db2021829a"],["categories/Kindle/index.html","914863af964678ef95065be0d90652c1"],["categories/Linux/index.html","64b9521ec8b1a9250adb63d668431670"],["categories/Linux/page/2/index.html","aeb84980749fbc2ab43064db61306884"],["categories/Mac/index.html","78efa98557e73334a0d8df0f8787b9d5"],["categories/hexo/index.html","f53b171dd40d69d0eabfe8f8d5413418"],["categories/index.html","bfb7b04317563aa029b29bfae0cd09a4"],["categories/python/index.html","862cbb06f32b61abdcaf68a7637c603e"],["categories/vue/index.html","74eff65cd4f1d3af5d1a9323d74b9fe6"],["ckb6dcetf0001c4ydcusz9bu3/index.html","fa726a1a0f3776028f2d3a768f9dbad6"],["ckb6dceuy000ec4ydba9hgiyi/index.html","6f3e1360e8aea74ec89a6f95e1e3b8c2"],["ckb6dcev0000gc4yd8btrhat4/index.html","45fa4eb43e6cdc63fe9702bdfdab64b8"],["ckb6dcev3000kc4yd01wifot7/index.html","d9fc6d165538219b7177242adc691aed"],["ckb6dcev5000mc4yd0y9b9ars/index.html","423d703ef84215d99687f2958599353a"],["ckb6dcev6000oc4yd06tz5l1x/index.html","ddbd35c081d9f87200a976bdca745a68"],["ckb6dcev7000sc4yd0gvh4hbj/index.html","1c6e66abeaf778a401432167c265df44"],["ckb6dcev8000tc4yd0s460ld9/index.html","14dc4298cd24d1e459a51a8bab7a1403"],["ckb6dcev9000xc4yd62ktfj5k/index.html","c5fcf32d019df1d999829166d2dc87b9"],["ckb6dceva000zc4yd65dt2vxh/index.html","237df952405b97ab795832b1655a96a3"],["ckb6dcevc0013c4ydadkm7bkq/index.html","fb64ffcdf78eaa565bf3c981de925442"],["ckb6dcevf0015c4yd0nnicc52/index.html","24e424683eda273c8a1fa7002a0ab153"],["ckb6dcevh0019c4ydai4r83hj/index.html","bd4ee5de234ba718ba87d1f87cc63682"],["ckb6dcevi001cc4yd5xwc4lrz/index.html","d5b5a858a470d44189297feb1ebfc4ea"],["ckb6dcevj001fc4yddlzyaeu7/index.html","ecb393fe94c2afc014dd6f43d81a726b"],["ckb6dcevo001jc4yd4rtv3875/index.html","ca495f31f19d93efc9ac28aead1c8722"],["ckb6dcevq001mc4ydex4k0e94/index.html","44f947211f271a6a0d06b8414fd22c74"],["ckb6dcevs001pc4yd6ic1gs55/index.html","afaf14dfa6e5d4b4b9dec57f086f92d5"],["ckb6dcevt001tc4ydedr0ampl/index.html","aacc40a2a91767572f7559846435c8de"],["ckb6dcevw001wc4ydfge21b5l/index.html","b8c175fa35f2cac0bc5bba9e1fca3007"],["ckb6dcevy0020c4ydgvtkg5ej/index.html","43626bb5289a1758e01b2f7e34d33a20"],["ckb6dcew00023c4yd687kdv1l/index.html","7976451a007354905f43a5dd3fa02e86"],["ckb6dcew10026c4yd9ophcxzt/index.html","b0dc43d889d3c4463ba3df5d2528d664"],["ckb6dcew20029c4yd7bg885jl/index.html","3ecef287008e9a7a2db95e7c8449c5c6"],["ckb6dcew4002dc4yddn5p7ruc/index.html","de2db9286820a454ec1ddcb59c2577a9"],["ckb6dcew6002gc4ydb7y62k73/index.html","65a150d858251a8086e46814fce7028e"],["ckb6dcew8002jc4yd8clq1c01/index.html","65404c219f9ff2258fee28cbeb46126f"],["ckb6dcewa002nc4yd2aad9nwd/index.html","690fdcac6209ab83632735c7a98805b1"],["contributors/index.html","50d16d5f92cb159aecb0bf1595fd97b9"],["css/style.css","9b7083a066f98207c53f547b3f61359b"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","f43f6fda5d73da7158411973b615ee1a"],["images/bubble.png","02febe86810e395c24e7e1aa33f256db"],["images/web.png","a700c5fceaaaf784f75014c1e8c1cbfd"],["img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["img/azure.svg","570248db796e292bf7b59a650cd079c8"],["img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["index.html","ed32c847d79c86bf658e1139dc9d912a"],["js/app.js","ea306851b6276a0ffeec351d138589e5"],["js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["js/valine.js","430596db58e60567246c52c474816ee6"],["list/index.html","3c056cfe59e0c6d56a6abd333d1969b4"],["msgboard/index.html","710940b119129c4ff677098dba287787"],["page/2/index.html","7e1c20427abdf16c680aad08fe89c831"],["page/3/index.html","73bf9a3f27c6b50fd6c202a6b7151c65"],["tags/Kindle/index.html","c57f10e724f632ea45dec5ccd5f7e7cb"],["tags/celery/index.html","4e20b39114e54bf90b5aae68eada5924"],["tags/copy/index.html","ebc4f301d133587ee7e4247a68f39759"],["tags/curl/index.html","673b304ff906b21553f3913e604fbaf6"],["tags/firewalld/index.html","855ab72907fa8cd7500582c8730a6eed"],["tags/gcc/index.html","484734dc91833413770eaf814c250334"],["tags/git/index.html","fa6550daeb2d5ef1336df166367dde81"],["tags/hexo/index.html","bd959e019552b4c4091f6247f6096fad"],["tags/index.html","4f82d1697b136c649b23485166c101cc"],["tags/interview/index.html","514c77d112b332fde00a66e72a034fba"],["tags/interviewer/index.html","24d67b538c1bf388d5eede33d0c84f68"],["tags/jdk/index.html","a24e335d4ffc3fc84b1c36a3177743cd"],["tags/jenkins/index.html","76dc9e316bd7ae62a5caf60683b1663c"],["tags/kafka/index.html","bd0796b088d1fe01abecca8990d8e29f"],["tags/licenses/index.html","efe7c8891961e484df5d38a590446881"],["tags/mac/index.html","1ba211469c634d4b301961ce39e6a8d2"],["tags/mongodb/index.html","d0741360ab79c11baf434063838a8ad9"],["tags/network/index.html","4df17cb36ea272194e2cb9e3711e6b6b"],["tags/nginx/index.html","2232e9986b0e2ba61379f8927efdbcca"],["tags/python/index.html","4e75d1d05c89529bb4fe808e0c5b8182"],["tags/scp/index.html","6fef987e08b16c3f1f6cc4d9a18c4133"],["tags/shell/index.html","bd4856c22d061b9b3d557db7afc838a7"],["tags/ssh-keygen/index.html","0fd585089fcc0ad9b7133882a952696e"],["tags/timedatectl/index.html","2cc642533d1590345cb52eb35b52eecd"],["tags/vue/index.html","d40a040fe618d31871162c094139238e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







