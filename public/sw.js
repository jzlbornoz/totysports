if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),d={module:{uri:t},exports:n,require:r};s[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0431625599cabe4d70baddecbfbde773"},{url:"/_next/static/SwvYQFDxL9VRPEeJc_IQJ/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/SwvYQFDxL9VRPEeJc_IQJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/249-5af7cbd5c8e40003.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/380-b87e3c30a207d4b7.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/548.d7db4b13de5dace8.js",revision:"d7db4b13de5dace8"},{url:"/_next/static/chunks/656-2f4d6ba9e28685e1.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/679-cafacc04946f3a9b.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/811.d8a03d93c01336bc.js",revision:"d8a03d93c01336bc"},{url:"/_next/static/chunks/846-875b935de55811a7.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/cart/head-ba5534d326228529.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/cart/page-2593dce8f0c23853.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/checkout/head-fc4759bc3b216970.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/checkout/page-2759c5e68ed52821.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/favorites/head-3b5998fa6c1fc58a.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/favorites/page-f3f903372bc246d4.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/head-7592dca85f3afbbe.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/layout-72720af4b246d14d.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/orders/%5Bid%5D/head-2ef995e927c15ba3.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/orders/%5Bid%5D/page-ddc55b5bf0318ad3.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/orders/head-8b462e2963e73a80.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/orders/page-5bf9602f6f5aa5ad.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/page-8fba7b856498b04c.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/stock/head-4d0e0edc214da904.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/stock/page-1ceee9a7bcaff706.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/store/%5Bid%5D/head-d5c6e030c806e1fa.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/store/%5Bid%5D/page-5863fb2962152926.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/store/clubs/head-7984161d9ecce5ee.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/store/clubs/page-8ae57d56be29489c.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/store/head-2d5e021451edb0c1.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/store/nations/head-5dbc6ae58e7b25a7.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/store/nations/page-b2c439b171450e77.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/app/store/page-021edac7c50d4ab1.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/c60e6be0-68f0aebee80a2fbc.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/main-32eac48040e474a0.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/main-app-2a22ad897c55a5f7.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-204bfc7c3f0a8ead.js",revision:"SwvYQFDxL9VRPEeJc_IQJ"},{url:"/_next/static/css/314373a4b1b5a411.css",revision:"314373a4b1b5a411"},{url:"/_next/static/css/b13bfd0e686959a2.css",revision:"b13bfd0e686959a2"},{url:"/_next/static/css/bd1e48238479df1d.css",revision:"bd1e48238479df1d"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/arsenal.1cc696ff.jpg",revision:"fa7df5889cf243a96f6bfbda71794a26"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/city.ed0a305d.webp",revision:"510983eadb8a2b28daf6e73b5cf1863e"},{url:"/_next/static/media/cr7.4bb61d34.jpg",revision:"8dc52166fafa7a9c457d764212506790"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/emptyCart.afbdda86.jpg",revision:"79843ff4990ed7e12e6674a9b9d1c67f"},{url:"/_next/static/media/italy.fe0586e9.webp",revision:"dcdf79ff2ded35835d6f241a8ef8e68c"},{url:"/_next/static/media/juventus.800341ed.jpg",revision:"afea1587774568c7097f5835c2c5e060"},{url:"/_next/static/media/liverpool.52ec282e.jpeg",revision:"de6678216204d9ff0d211f5117ca7f4f"},{url:"/_next/static/media/logo.53d183df.png",revision:"9d88c15a60abcb64ab53de6c5a2ae49c"},{url:"/_next/static/media/modric.193951f5.jpeg",revision:"32ad968aedcb82696ebc13e98cdaa9b5"},{url:"/_next/static/media/psg.d90f4528.jpg",revision:"3d2baa36691af3c5daa2e5b5c46d492d"},{url:"/favicon.ico",revision:"7d48a705aa114c7af2898aca8e13ec77"},{url:"/icon-192x192.png",revision:"b10bc23463473e0b4c00798e74478088"},{url:"/icon-256x256.png",revision:"de590d746b6e27e07e8fbaba0925d62f"},{url:"/icon-384x384.png",revision:"a99fd20df8b2478ace4972d622df9a4f"},{url:"/icon-512x512.png",revision:"4341fdfc695db887a51a9ec17c0c8f45"},{url:"/manifest.json",revision:"f86c59a4eee397994219a0c5a3a31a0b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
