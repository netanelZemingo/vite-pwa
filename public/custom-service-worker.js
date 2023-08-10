
'use strict';

console.log("custom service worker is running");
self.addEventListener('push', function (event) {
    const data = JSON.parse(event.data.text());
    event.waitUntil(
        registration.showNotification(data.title, {
            body: data.message,
            //   icon: '/icons/android-chrome-192x192.png'
        })
    );
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
            if (clientList.length > 0) {
                let client = clientList[0];
                for (let i = 0; i < clientList.length; i++) {
                    if (clientList[i].focused) {
                        client = clientList[i];
                    }
                }
                return client.focus();
            }
            return clients.openWindow('/');
        })
    );
});

const userCacheName = "userData";
self.addEventListener('message', event => {
    if (event.data && event.data.action === 'setUserId') {
        const userId = event.data.userId;
        console.log("got the id !!!", event.data);
        // Store the user ID in the Cache API
        caches.open(userCacheName).then(cache => {
            cache.put('user-id', new Response(userId));
        });
    }
});

async function getUserIDFromCache() {
    const cache = await caches.open(userCacheName);
    const response = await cache.match('user-id');

    if (response) {
        return response.text(); // Return the user ID
    } else {
        return null; // User ID not found in cache
    }
}
const serverUrl = "https://ferret-able-barely.ngrok-free.app"

self.addEventListener('pushsubscriptionchange', async (event) => {
    const oldSubscription = event.oldSubscription;
    const newSubscription = event.newSubscription;
    const userId = await getUserIDFromCache();
    if (!userId) {
        return;
    }
    if (oldSubscription && !newSubscription) {
        // Subscription has been removed or expired, handle accordingly
        // Delete old subscription from the server or database
        await fetch(serverUrl+'/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "ngrok-skip-browser-warning": "69420", },
            body: JSON.stringify({ _id: userId, user: { subsription: null }, fromServiceWorker: true })
        });
        return;
    } else {
        await fetch(serverUrl+'/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "ngrok-skip-browser-warning": "69420", },
            body: JSON.stringify({ _id: userId, user: { subsription: newSubscription }, fromServiceWorker: true })
        });
    }
});
