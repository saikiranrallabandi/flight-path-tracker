# Flight Path Tracker API

## Overview

The Flight Path Tracker API is a microservice that helps determine and track the flight path of a person based on a list of unordered flights. The API takes in a list of flights defined by source and destination airport codes, sorts them to form a valid path, and returns the complete route from the starting airport to the final destination.

## API Endpoint

### `POST /calculate`

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
