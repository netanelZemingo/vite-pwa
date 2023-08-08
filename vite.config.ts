import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",

      // injectManifest: { swSrc: "./public/custom-service-worker.ts" },
      devOptions: {
        enabled: true,
      },

      workbox: {
        importScripts: ["./custom-service-worker.js"],
        runtimeCaching: [
          // {
          //   handler: "CacheFirst",
          //   urlPattern: ({ url }) => {
          //     return url.origin.includes("http://localhost:5173");
          //   },
          //   // options: { cacheableResponse: { statuses: [0, 200] } },
          // },
          {
            // chaching all the ok 0,200 http codes from all urls
            handler: "NetworkOnly",
            urlPattern: ({ url }) => url.href === "https://jsonplaceholder.typicode.com/todos/1",
            options: { cacheableResponse: { statuses: [0, 200] } },
          },
          {
            handler: "CacheFirst",
            urlPattern: ({ url }) => url.href === "https://jsonplaceholder.typicode.com/todos/2",
            options: { cacheableResponse: { statuses: [0, 200] } },
          },
          {
            // chaching all the ok 0,200 http codes from all urls
            handler: "StaleWhileRevalidate",
            urlPattern: ({ url }) => url.href === "https://jsonplaceholder.typicode.com/todos/3",
            // options: { cacheableResponse: { statuses: [0, 200] } },
          },
          {
            handler: "StaleWhileRevalidate",
            method: "GET",
            urlPattern: ({ url }) => {
              console.log(url.pathname);

              return url.pathname === "/chat";
            },
          },
          {
            handler: "CacheFirst",
            method: "GET",
            urlPattern: ({ url }) => {
              return url.href.includes("https://robohash.org/");
            },
          },
        ],
      },

      manifest: {
        share_target: { action: "share", params: {} },
        name: "vite pwa tries",
        short_name: "Vite Pwa ",
        display: "standalone",
        start_url: ".",
        theme_color: "#000000",

        icons: [
          {
            src: "/textPic.png",
            sizes: "192x192",
            type: "image/png",
          },

          {
            src: "/vite.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any",
          },
          {
            src: "/vite.svg",
            sizes: "144x144",
            type: "image/svg+xml",
            purpose: "any",
          },
        ],
        shortcuts: [
          {
            name: "Network Only",
            url: `/networkOnly`,
            icons: [{ src: "/vite.svg", sizes: "144x144" }],
          },
          {
            name: "Cache First",
            url: "/cacheFirst",
            icons: [{ src: "/vite.svg", sizes: "144x144" }],
          },
          {
            name: "staleWhileRevalidate",
            url: "/staleWhileRevalidate",
            icons: [{ src: "/vite.svg", sizes: "144x144" }],
          },
        ],
      },
    }),
  ],
  // server: { fs: { allow: ["/"] } },
});
