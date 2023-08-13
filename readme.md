# Progressive Web Apps (PWA)

This repository serves as a reference for Vite-pwa. A Progressive Web App (PWA) is essentially a web application that can be installed on your mobile or PC devices. Behind the scenes, it saves the website link and presents it as a native app.

I have created a basic example showcasing various methods of caching data using a generated `manifest.json` and a generated web worker. This was achieved with the assistance of the Vite-pwa library, which can be found at: [https://vite-pwa-org.netlify.app/](https://vite-pwa-org.netlify.app/).

Vite-pwa is built on top of Workbox, a library developed by Google to simplify PWA creation. Other frameworks like Create-React-App (CRA) and Next.js can also be used to create PWAs.

I chose Vite for this project due to the superiority of the Vite-pwa library compared to other options. To verify correct PWA configuration and identify errors, it's recommended to use the Lighthouse Chrome DevTools, a user-friendly tool.

Inside this repository, I have incorporated a range of fundamental PWA features:

- Install Button: Please note that its functionality can be finicky, as the browser's default installation process might take precedence.
- Network Caching
- Share Button (currently sharing a string, but native app integration is planned)
- Context Menu Options: Custom context menu buttons have been added for macOS and Android, potentially extending to Windows and iOS.
- Web Notifications: Achieved through the use of the web-push library on the server side, complemented by a custom Service Worker on the client side.

Known iOS limitations include:

1. **Install Button**: Custom install buttons cannot be created on iOS. To download the app on iOS, users need to access the menu and search for "Install this app" or a similar option.
2. **Notification Subscriptions**: Users cannot subscribe to notifications directly from the web page on iOS; they must first install the app.

For guidance on adding your app to app stores, further research is needed. Below are relevant links I've come across:

- **iOS**: [https://blog.pwabuilder.com/posts/publish-your-pwa-to-the-ios-app-store/](https://blog.pwabuilder.com/posts/publish-your-pwa-to-the-ios-app-store/)
- **Android**: [https://developers.google.com/codelabs/pwa-in-play?hl=he#0](https://developers.google.com/codelabs/pwa-in-play?hl=he#0)

- **Server Repository**: [https://github.com/netanelZemingo/pwa-server](https://github.com/netanelZemingo/pwa-server)


PWA is also crucial for any web app with images or assets loading due to its effective caching strategies.
Lets look at some at some Pros/Cons
## PWA Advantages over Normal Websites:
- Offline Beahviors
- Caching, Caching helps the user to load the website faster.

## PWA Advantages over Native Apps:
- Memory Space
- Installation Simplicity:
- Version Updates
- One Codebase

## PWA Disadvantages compared to Native Apps:
- Battery Consumption
- Using FileSystem (can be mitigated by desktop cache and storage APIs)
