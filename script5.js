const apiKey = "1b12057a3d2bb2555d6422d5fa2312da"; // Replace with your actual API key

function fetchWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      // Extract other relevant information as needed

      document.getElementById("location").textContent = city;
      document.getElementById("temperature").textContent = temperature + "°C";
      document.getElementById("description").textContent = description;
      // Display other information accordingly
    })
    .catch(error => console.error(error));
}

// Get user's location (if supported)
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeather(`${lat},${lon}`);
  });
}

// Handle user input
document.getElementById("search-button").addEventListener("click", () => {
  const location = document.getElementById("search-location").value;
  fetchWeather(location);
});
