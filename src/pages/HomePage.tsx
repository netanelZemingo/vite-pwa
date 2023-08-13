import React from "react";
import { styled } from "styled-components";

const HomeContainer = styled.div`
  padding: 1rem;
`;
export const HomePage = () => {
  return (
    <HomeContainer>
      <h1>Progressive Web Apps (PWA)</h1>
      <p>
        This repository serves as a reference for Vite-pwa. A Progressive Web App (PWA) is
        essentially a web application that can be installed on your mobile or PC devices. Behind the
        scenes, it saves the website link and presents it as a native app.
      </p>
      <p>
        I have created a basic example showcasing various methods of caching data using a generated{" "}
        <code>manifest.json</code> and a generated web worker. This was achieved with the assistance
        of the Vite-pwa library, which can be found at:{" "}
        <a href="https://vite-pwa-org.netlify.app/">https://vite-pwa-org.netlify.app/</a>.
      </p>
      <p>
        Vite-pwa is built on top of Workbox, a library developed by Google to simplify PWA creation.
        Other frameworks like Create-React-App (CRA) and Next.js can also be used to create PWAs.
      </p>
      <p>
        I chose Vite for this project due to the superiority of the Vite-pwa library compared to
        other options. To verify correct PWA configuration and identify errors, it's recommended to
        use the Lighthouse Chrome DevTools, a user-friendly tool.
      </p>
      <p>Inside this repository, I have incorporated a range of fundamental PWA features:</p>
      <ul>
        <li>
          Install Button: Please note that its functionality can be finicky, as the browser's
          default installation process might take precedence.
        </li>
        <li>Network Caching</li>
        <li>Share Button (currently sharing a string, but native app integration is planned)</li>
        <li>
          Context Menu Options: Custom context menu buttons have been added for macOS and Android,
          potentially extending to Windows and iOS.
        </li>
        <li>
          Web Notifications: Achieved through the use of the web-push library on the server side,
          complemented by a custom Service Worker on the client side.
        </li>
      </ul>
      <p>Known iOS limitations include:</p>
      <ol>
        <li>
          <strong>Install Button</strong>: Custom install buttons cannot be created on iOS. To
          download the app on iOS, users need to access the menu and search for "Install this app"
          or a similar option.
        </li>
        <li>
          <strong>Notification Subscriptions</strong>: Users cannot subscribe to notifications
          directly from the web page on iOS; they must first install the app.
        </li>
      </ol>
      <p>
        For guidance on adding your app to app stores, further research is needed. Below are
        relevant links I've come across:
      </p>
      <ul>
        <li>
          <strong>iOS</strong>:{" "}
          <a href="https://blog.pwabuilder.com/posts/publish-your-pwa-to-the-ios-app-store/">
            https://blog.pwabuilder.com/posts/publish-your-pwa-to-the-ios-app-store/
          </a>
        </li>
        <li>
          <strong>Android</strong>:{" "}
          <a href="https://developers.google.com/codelabs/pwa-in-play?hl=he#0">
            https://developers.google.com/codelabs/pwa-in-play?hl=he#0
          </a>
        </li>
      </ul>
      <p>
        <strong>Server Repository</strong>:{" "}
        <a href="https://github.com/netanelZemingo/pwa-server">
          https://github.com/netanelZemingo/pwa-server
        </a>
      </p>
      <p>
        PWA is also crucial for any web app with images or assets loading due to its effective
        caching strategies.
      </p>
      <p>Lets look at some at some Pros/Cons</p>
      <h2>PWA Advantages over Normal Websites:</h2>
      <ul>
        <li>Offline Behaviors</li>
        <li>Caching, Caching helps the user to load the website faster.</li>
      </ul>
      <h2>PWA Advantages over Native Apps:</h2>
      <ul>
        <li>Memory Space</li>
        <li>Installation Simplicity:</li>
        <li>Version Updates</li>
        <li>One Codebase</li>
      </ul>
      <h2>PWA Disadvantages compared to Native Apps:</h2>
      <ul>
        <li>Battery Consumption</li>
        <li>Using FileSystem (can be mitigated by desktop cache and storage APIs)</li>
      </ul>
    </HomeContainer>
  );
};
