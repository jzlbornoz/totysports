if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),d={module:{uri:t},exports:n,require:r};s[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e2db5eb988bed7f64cddf9cbe82dd2d8"},{url:"/_next/static/TTCLXBsAh13X0-3Pl4_bE/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/TTCLXBsAh13X0-3Pl4_bE/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/249-5eb2761ce0d86059.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/380-f64c8fcbb2b0000c.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/548.d7db4b13de5dace8.js",revision:"d7db4b13de5dace8"},{url:"/_next/static/chunks/656-5f95a59dc07be1d5.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/679-85d5a23eac27fae9.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/7ea90720-99348c5809156147.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/811.d8a03d93c01336bc.js",revision:"d8a03d93c01336bc"},{url:"/_next/static/chunks/846-35848291b3269838.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/907-32e2b9624dc1beb2.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/cart/head-075d455f7d01b5f4.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/cart/page-c11b7c9ad138e5cf.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/checkout/page-ad4bb3ad35803982.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/head-a4772096a51706ee.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/layout-bc438272f061070b.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/page-8114c82af3644e1a.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/stock/head-cd07e98a0b638734.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/stock/page-f7bb862370e88f3c.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/store/%5Bid%5D/head-d9cd1e0698227fdb.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/store/%5Bid%5D/page-5f09ecc3af300f5c.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/store/head-b17703171f266583.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/app/store/page-48adf2259fb3fb3e.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/c60e6be0-582d127b90233481.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/main-2401d631d474f495.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/main-app-2a22ad897c55a5f7.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-02ac9fb3665a9d12.js",revision:"TTCLXBsAh13X0-3Pl4_bE"},{url:"/_next/static/css/21393632dd007df3.css",revision:"21393632dd007df3"},{url:"/_next/static/css/96923d35be9d9a75.css",revision:"96923d35be9d9a75"},{url:"/_next/static/css/b13bfd0e686959a2.css",revision:"b13bfd0e686959a2"},{url:"/_next/static/css/eb081f8a943c5aa6.css",revision:"eb081f8a943c5aa6"},{url:"/_next/static/css/f319045db6386dec.css",revision:"f319045db6386dec"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/cr7.4bb61d34.jpg",revision:"8dc52166fafa7a9c457d764212506790"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/italy.fe0586e9.webp",revision:"dcdf79ff2ded35835d6f241a8ef8e68c"},{url:"/_next/static/media/juventus.800341ed.jpg",revision:"afea1587774568c7097f5835c2c5e060"},{url:"/_next/static/media/liverpool.52ec282e.jpeg",revision:"de6678216204d9ff0d211f5117ca7f4f"},{url:"/_next/static/media/logo.53d183df.png",revision:"9d88c15a60abcb64ab53de6c5a2ae49c"},{url:"/_next/static/media/modric.193951f5.jpeg",revision:"32ad968aedcb82696ebc13e98cdaa9b5"},{url:"/favicon.ico",revision:"7d48a705aa114c7af2898aca8e13ec77"},{url:"/icon-192x192.png",revision:"b10bc23463473e0b4c00798e74478088"},{url:"/icon-256x256.png",revision:"de590d746b6e27e07e8fbaba0925d62f"},{url:"/icon-384x384.png",revision:"a99fd20df8b2478ace4972d622df9a4f"},{url:"/icon-512x512.png",revision:"4341fdfc695db887a51a9ec17c0c8f45"},{url:"/manifest.json",revision:"f86c59a4eee397994219a0c5a3a31a0b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
