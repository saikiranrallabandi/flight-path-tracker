# Flight Path Tracker API

## Overview

The Flight Path Tracker API is a microservice that helps determine and track the flight path of a person based on a list of unordered flights. The API takes in a list of flights defined by source and destination airport codes, sorts them to form a valid path, and returns the complete route from the starting airport to the final destination.

## API Endpoint
The API has two endpoints:
### ` GET /health`

### `POST /calculate`

### `/health`
Basic health check to detect if the application is responding. It answers to GET requests only.

### Request example
```
curl -i http://localhost:8080

```

### Response example

```
HTTP/1.1 200 OK
Date: Sat, 09 Jul 2022 17:51:45 GMT
Content-Length: 0

```


#### Description

This endpoint accepts a list of unordered flights and returns the ordered flight path starting from the initial source airport and ending at the final destination airport.

#### Request

- **Method**: `POST`
- **URL**: `http://localhost:8080/calculate`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  - A JSON array of arrays, where each inner array represents a flight segment with a source and destination airport code.

**Request Body Example**:

```json
[
  ["ATL", "EWR"],
  ["SFO", "ATL"]
]
```

### How to run the server

### Docker
The docker-compose can be found here. The docker-compose builds the Docker image corresponding to this Dockerfile and starts the server.

make dev runs the docker-compose in the background
make logs follows the docker-compose logs
make nodev stops and removes the container
make devrebuild rebuilds the image and runs the container in the background

### Potential improvements
The following are ideas that haven't been implemented due to lack of time.

input data validation: output can be unpredictable if the list of flights is not valid
config file: it comes handy having the HTTP port configurable. 
logger: logging has been implemented with the standard library's log package. A better alternative would be logrus
data generator: the idea was to create a function able to generate a list with hundres/thousands of flights, to better understand which algorithm scales better
live reload: reflex is a great tool to test code changes without having to restart the server
unit tests: self-explanatory