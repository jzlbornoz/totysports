if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0f2b7af9e966728ec8bafbf620f7e526"},{url:"/_next/static/0GbVxBmhIn1FhRmQmPJ-N/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/0GbVxBmhIn1FhRmQmPJ-N/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/380-b87e3c30a207d4b7.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/491-8dc88212521437bc.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/503.c838f60bd85a1ede.js",revision:"c838f60bd85a1ede"},{url:"/_next/static/chunks/679-cafacc04946f3a9b.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/811.d3a6e55f87c6956b.js",revision:"d3a6e55f87c6956b"},{url:"/_next/static/chunks/868.8f113f5c4b6d5d57.js",revision:"8f113f5c4b6d5d57"},{url:"/_next/static/chunks/app/cart/page-ffba2f4cd561de02.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/app/head-2a49234ffd0ab937.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/app/layout-c256dbd8f7a51c1b.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/app/page-1890b2efe980da47.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/app/stock/page-4172f8e3b157203a.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/app/store/%5Bid%5D/page-94bdd2f5067925f7.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/app/store/page-4dcf61df4e251ac2.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/c60e6be0-f5de601335cb99da.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/main-113e476da6a39b98.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/main-app-7c04b086b8e822c0.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0d8b7cd30b52c03d.js",revision:"0GbVxBmhIn1FhRmQmPJ-N"},{url:"/_next/static/css/03567211398248f2.css",revision:"03567211398248f2"},{url:"/_next/static/css/3e2d9d06927f5411.css",revision:"3e2d9d06927f5411"},{url:"/_next/static/css/853c5640d39c7d4e.css",revision:"853c5640d39c7d4e"},{url:"/_next/static/css/864a0abd44174171.css",revision:"864a0abd44174171"},{url:"/_next/static/css/cb79709a7751773f.css",revision:"cb79709a7751773f"},{url:"/_next/static/css/fc43cdbd10585b99.css",revision:"fc43cdbd10585b99"},{url:"/_next/static/css/ffa6367fdf432817.css",revision:"ffa6367fdf432817"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/cr7.4bb61d34.jpg",revision:"8dc52166fafa7a9c457d764212506790"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/italy.fe0586e9.webp",revision:"dcdf79ff2ded35835d6f241a8ef8e68c"},{url:"/_next/static/media/logo.53d183df.png",revision:"9d88c15a60abcb64ab53de6c5a2ae49c"},{url:"/_next/static/media/messi-chest.69b37fca.jpg",revision:"9f1e67c717f6e464fcc68769993d3a54"},{url:"/_next/static/media/modric.193951f5.jpeg",revision:"32ad968aedcb82696ebc13e98cdaa9b5"},{url:"/_next/static/media/pedri.1a02b6eb.jpg",revision:"0ae5af80aabf0ed34dbe816d5f8a9b62"},{url:"/favicon.ico",revision:"7d48a705aa114c7af2898aca8e13ec77"},{url:"/icon-192x192.png",revision:"b10bc23463473e0b4c00798e74478088"},{url:"/icon-256x256.png",revision:"de590d746b6e27e07e8fbaba0925d62f"},{url:"/icon-384x384.png",revision:"a99fd20df8b2478ace4972d622df9a4f"},{url:"/icon-512x512.png",revision:"4341fdfc695db887a51a9ec17c0c8f45"},{url:"/manifest.json",revision:"f86c59a4eee397994219a0c5a3a31a0b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
