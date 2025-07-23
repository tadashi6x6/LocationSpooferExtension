# LocationSpooferExtension
The extension overrides the navigator.geolocation API to return user-specified coordinates when enabled, falling back to the device's actual location when disabled. It uses chrome.storage.local to persist settings and communicates between the popup and content scripts via the background service worker. 
