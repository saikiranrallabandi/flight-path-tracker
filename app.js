const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/calculate', (req, res) => {
  const flights = req.body;

  // Create maps to hold connections
  const startMap = new Map();
  const endMap = new Map();

  flights.forEach(([source, destination]) => {
    startMap.set(source, destination);
    endMap.set(destination, source);
  });

  // Find the starting airport (one that is not a destination)
  let startAirport;
  for (const source of startMap.keys()) {
    if (!endMap.has(source)) {
      startAirport = source;
      break;
    }
  }

  // Build the ordered path
  const flightPath = [];
  while (startAirport) {
    flightPath.push(startAirport);
    startAirport = startMap.get(startAirport);
  }

  // Only return the start and end of the path
  const result = [flightPath[0], flightPath[flightPath.length - 1]];

  res.json(result);
});


app.listen(port, () => {
  console.log(`Flight path tracker API listening on port ${port}`);
});
