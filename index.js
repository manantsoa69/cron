const axios = require('axios');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  await checkWebsiteStatus();
  res.send('Website status check initiated. Check the console for results.');
});

async function checkWebsiteStatus() {
  const urls = [
    'https://response-qqh1.onrender.com/',
    'https://serverchat-v3qr.onrender.com/'
  ];

  for (const url of urls) {
    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        console.log(`${url} is active and accessible.`);
      } else {
        console.log(`${url} returned status code ${response.status}. It may not be active.`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      console.log(`${url} is not active or there was an error.`);
    }
  }
}

// Schedule the check to run every 14 minutes (14 * 60,000 milliseconds)
const interval = 14 * 60 * 1000;
setInterval(checkWebsiteStatus, interval);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
