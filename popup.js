document.getElementById('setLocation').addEventListener('click', () => {
  const latitude = parseFloat(document.getElementById('latitude').value);
  const longitude = parseFloat(document.getElementById('longitude').value);
  const status = document.getElementById('status');

  if (isNaN(latitude) || isNaN(longitude)) {
    status.textContent = 'Please enter valid coordinates!';
    status.style.color = 'red';
    return;
  }

  chrome.storage.local.set({ latitude, longitude, spoofing: true }, () => {
    status.textContent = `Location set to (${latitude}, ${longitude})`;
    status.style.color = 'green';
    chrome.runtime.sendMessage({ action: 'updateLocation' });
  });
});

document.getElementById('resetLocation').addEventListener('click', () => {
  chrome.storage.local.set({ spoofing: false }, () => {
    document.getElementById('status').textContent = 'Location reset to default';
    document.getElementById('latitude').value = '';
    document.getElementById('longitude').value = '';
    chrome.runtime.sendMessage({ action: 'updateLocation' });
  });
});