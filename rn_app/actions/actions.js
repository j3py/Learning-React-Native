// BASE ACTIONS
export function ZIP_SUBMIT = (zip, enterZip) => {
  return {
    type: 'ZIP_SUBMIT',
    zip: zip,
    enterZip: enterZip
  };
}

export function GET_CURRENT = (current, flavor1, flavor2, city, image) => {
  return {
    type: 'GET_CURRENT',
    current: current,
    flavor1: flavor1,
    flavor2: flavor2,
    city: city,
    image: image
  };
}

export function DETAIL_PRESS = (overlayTop) => {
  return {
    type: 'DETAIL_PRESS',
    overlayTop: overlayTop
  };
}

export function GET_FORECAST = (forecast) => {
  return {
    type: 'GET_FORECAST',
    forecast: forecast
  };
}

export function GET_STATIONS = (stations) => {
  return {
    type: 'GET_STATIONS',
    stations: stations
  };
}

// DETAILS ACTIONS
