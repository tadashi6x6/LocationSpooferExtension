const originalGetCurrentPosition = navigator.geolocation.getCurrentPosition;
const originalWatchPosition = navigator.geolocation.watchPosition;

navigator.geolocation.getCurrentPosition = function(success, error, options) {
  chrome.storage.local.get(['latitude', 'longitude', 'spoofing'], (data) => {
    if (data.spoofing && !isNaN(data.latitude) && !isNaN(data.longitude)) {
      const fakePosition = {
        coords: {
          latitude: data.latitude,
          longitude: data.longitude,
          accuracy: 100,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null
        },
        timestamp: Date.now()
      };
      success(fakePosition);
    } else {
      originalGetCurrentPosition.call(navigator.geolocation, success, error, options);
    }
  });
};

navigator.geolocation.watchPosition = function(success, error, options) {
  chrome.storage.local.get(['latitude', 'longitude', 'spoofing'], (data) => {
    if (data.spoofing && !isNaN(data.latitude) && !isNaN(data.longitude)) {
      const fakePosition = {
        coords: {
          latitude: data.latitude,
          longitude: data.longitude,
          accuracy: 100,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null
        },
        timestamp: Date.now()
      };
      success(fakePosition);
    } else {
      originalWatchPosition.call(navigator.geolocation, success, error, options);
    }
  });
};