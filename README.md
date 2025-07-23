# Location Spoofer Extension

A Microsoft Edge browser extension to spoof GPS location using the HTML5 Geolocation API. This extension allows users to set custom latitude and longitude coordinates to override the browser's geolocation data.

## Features
- Set custom latitude and longitude coordinates via a popup interface.
- Reset to the device's default geolocation.
- Persists settings using chrome.storage.local.
- Compatible with Microsoft Edge (Chromium-based).

## Installation
1. Clone or download this repository.
2. Open Microsoft Edge and navigate to `edge://extensions/`.
3. Enable "Developer mode" in the top right.
4. Click "Load unpacked" and select the repository folder.
5. The extension should appear in the toolbar.

## Usage
1. Click the extension icon to open the popup.
2. Enter desired latitude and longitude coordinates.
3. Click "Set Location" to spoof the location.
4. Click "Reset to Default" to revert to the device's actual location.
5. Visit a website that uses geolocation (e.g., Google Maps) to test.

## Development
- **manifest.json**: Defines the extension's configuration, permissions, and entry points.
- **popup.html/css/js**: Provides the user interface for setting coordinates.
- **background.js**: Handles communication between popup and content scripts.
- **content.js**: Overrides the `navigator.geolocation` API to return spoofed coordinates.

## Testing
Tested on Microsoft Edge (Chromium-based, version 130+). Use websites like `https://browserleaks.com/geo` to verify the spoofed location.

## Notes
- The extension requires the `geolocation` and `storage` permissions.
- Icon files (`icon16.png`, `icon48.png`, `icon128.png`) are placeholders; replace with actual images.
- Spoofed location is temporary and resets when the browser closes unless saved in storage.
- For privacy, the extension does not store or transmit real location data.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
MIT License