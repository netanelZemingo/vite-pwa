if(!self.define){let e,s={};const o=(o,t)=>(o=new URL(o+".js",t).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(t,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const l=e=>o(e,n),c={module:{uri:n},exports:r,require:l};s[n]=Promise.all(t.map((e=>c[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-4f7b4b42"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-01f3cf09.css",revision:null},{url:"assets/index-8e95cd15.js",revision:null},{url:"assets/swRegister-4ed993c7.js",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"custom-service-worker.js",revision:"b7fe2f9759dcb754361bdb72be6c0fd1"},{url:"index.html",revision:"fe12bb0a17b34c6a796d0903676037bb"},{url:"textPic.png",revision:"389c0a9282cc7fa63568b7081037350f"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"a85e89c3cccf8680e2343e3ccfe4b5bf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>"https://jsonplaceholder.typicode.com/todos/1"===e.href),new e.NetworkOnly({plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({url:e})=>"https://jsonplaceholder.typicode.com/todos/2"===e.href),new e.CacheFirst({plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({url:e})=>"https://jsonplaceholder.typicode.com/todos/3"===e.href),new e.StaleWhileRevalidate,"GET")}));
