import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      
      devOptions: {
        enabled: true,
        /* other options */
      },
      workbox: {
        
        runtimeCaching: [
          {
            handler: "CacheFirst",
            urlPattern: ({ url }) => {
              return url.origin.includes("http://localhost:5173");
            },
            // options: { cacheableResponse: { statuses: [0, 200] } },
          },
          {
            handler: "CacheFirst",
            urlPattern: ({ url }) => url.href === "https://jsonplaceholder.typicode.com/todos/2",
            options: { cacheableResponse: { statuses: [0, 200] } },
          },
          {
            // chaching all the ok 0,200 http codes from all urls
            handler: "NetworkOnly",
            urlPattern: ({ url }) => url.href === "https://jsonplaceholder.typicode.com/todos/1",
            options: { cacheableResponse: { statuses: [0, 200] } },
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
            name: "Page 1",
            url: "/1",
            icons: [{ src: "/vite.svg", sizes: "144x144" }],
          },
          {
            name: "page 2",
            url: "/2",
            icons: [{ src: "/vite.svg", sizes: "144x144" }],
          },
        ],
      },
    }),
  ],
});
