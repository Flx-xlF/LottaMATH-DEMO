/**
 * Update Manager for PWA Service Worker Updates
 * Implements context-aware background updates without interrupting the user.
 */

let isUpdateAvailable = false;
let waitingServiceWorker = null;

export function registerServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((registration) => {
        
        // Listen for new service worker installation
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              // If the new worker is installed and waiting, an update is ready
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('Update Manager: New update available in background.');
                isUpdateAvailable = true;
                waitingServiceWorker = newWorker;
              }
            });
          }
        });

      }).catch((err) => {
        console.warn('Service worker registration failed:', err);
      });

      // Reload the page when the new service worker takes control
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    });
  }
}

/**
 * Call this function at safe navigation points (e.g., Dashboard).
 * It triggers the waiting service worker to take over, causing an auto-reload.
 */
export function triggerUpdateIfAvailable() {
  if (isUpdateAvailable && waitingServiceWorker) {
    console.log('Update Manager: Triggering update at safe point.');
    waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    // Reset flags (though reload will happen immediately)
    isUpdateAvailable = false;
    waitingServiceWorker = null;
  }
}
