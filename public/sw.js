if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),f={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c66ba347680c1f69445c20b993aa6922"},{url:"/_next/static/chunks/380-b87e3c30a207d4b7.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/394-58d409539b9bfb32.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/447-4da38e583853e012.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/548.d7db4b13de5dace8.js",revision:"d7db4b13de5dace8"},{url:"/_next/static/chunks/679-cafacc04946f3a9b.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/811.d8a03d93c01336bc.js",revision:"d8a03d93c01336bc"},{url:"/_next/static/chunks/871-a2197b0ac8afff10.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/cart/head-aeb015c711675871.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/cart/page-630bfa56cf4901e0.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/checkout/head-f6f25a623d7c83bb.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/checkout/page-93addb4486ba711e.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/favorites/head-db470b4e6efefe4b.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/favorites/page-d9cd7cd1339f9e53.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/form/head-953f16a8c11a2716.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/form/page-cd9adca43ffc52a8.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/head-9a4fa8312b0fbd19.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/layout-89170d7254e553c1.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/orders/%5Bid%5D/head-27adb864f495c93d.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/orders/%5Bid%5D/page-1f0deede3aa51534.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/orders/head-245e2d52a126d4cc.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/orders/page-f8ee203ab510acd6.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/page-1d7489316eab9fd7.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/stock/head-a55a2694db54e3a0.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/stock/page-2bf80ffcee73133d.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/store/%5Bid%5D/head-7e30f8832a802add.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/store/%5Bid%5D/page-d4a6b950533306d3.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/store/clubs/head-409c43b02f9c6850.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/store/clubs/page-31978ef236be7a5f.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/store/head-ed2fe93295f1ebee.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/store/nations/head-a85418d99482f181.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/store/nations/page-f640685ea6337fc1.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/app/store/page-8a97f523e8bc742a.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/c60e6be0-68f0aebee80a2fbc.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/main-app-2a22ad897c55a5f7.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/main-b29cf85c8b7c1f65.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-c52e0507e4f0cae9.js",revision:"iJkCS1SMYFthF20_mnf6n"},{url:"/_next/static/css/869c88bce09e7538.css",revision:"869c88bce09e7538"},{url:"/_next/static/css/b13bfd0e686959a2.css",revision:"b13bfd0e686959a2"},{url:"/_next/static/css/bd1e48238479df1d.css",revision:"bd1e48238479df1d"},{url:"/_next/static/iJkCS1SMYFthF20_mnf6n/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/iJkCS1SMYFthF20_mnf6n/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/arsenal.1cc696ff.jpg",revision:"fa7df5889cf243a96f6bfbda71794a26"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/city.ed0a305d.webp",revision:"510983eadb8a2b28daf6e73b5cf1863e"},{url:"/_next/static/media/cr7.4bb61d34.jpg",revision:"8dc52166fafa7a9c457d764212506790"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/emptyCart.afbdda86.jpg",revision:"79843ff4990ed7e12e6674a9b9d1c67f"},{url:"/_next/static/media/italy.fe0586e9.webp",revision:"dcdf79ff2ded35835d6f241a8ef8e68c"},{url:"/_next/static/media/juventus.800341ed.jpg",revision:"afea1587774568c7097f5835c2c5e060"},{url:"/_next/static/media/liverpool.52ec282e.jpeg",revision:"de6678216204d9ff0d211f5117ca7f4f"},{url:"/_next/static/media/logo.53d183df.png",revision:"9d88c15a60abcb64ab53de6c5a2ae49c"},{url:"/_next/static/media/modric.193951f5.jpeg",revision:"32ad968aedcb82696ebc13e98cdaa9b5"},{url:"/_next/static/media/psg.d90f4528.jpg",revision:"3d2baa36691af3c5daa2e5b5c46d492d"},{url:"/favicon.ico",revision:"7d48a705aa114c7af2898aca8e13ec77"},{url:"/icon-192x192.png",revision:"b10bc23463473e0b4c00798e74478088"},{url:"/icon-256x256.png",revision:"de590d746b6e27e07e8fbaba0925d62f"},{url:"/icon-384x384.png",revision:"a99fd20df8b2478ace4972d622df9a4f"},{url:"/icon-512x512.png",revision:"4341fdfc695db887a51a9ec17c0c8f45"},{url:"/manifest.json",revision:"f86c59a4eee397994219a0c5a3a31a0b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
