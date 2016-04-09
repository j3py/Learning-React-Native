// BASE ACTIONS
export const ZIP_SUBMIT = (zip) => {
  return {
    type: 'ZIP_SUBMIT',
    zip: zip,
    enterZip: true
  }
}

export const GET_CURRENT = (current, flavor1, flavor2, city, image) => {
  return {
    type: 'GET_CURRENT',
    current: current,
    flavor1: flavor1,
    flavor2: flavor2,
    city: city,
    image: image
  }
}

export const DETAIL_PRESS = () => {
  return {
    type: 'DETAIL_PRESS',
    overlayTop
  }
}

export const GET_FORECAST = (forecast) => {
  return {
    type: 'GET_FORECAST',
    forecast: forecast
  }
}

export const GET_STATIONS = (stations) => {
  return {
    type: 'GET_STATIONS',
    stations: stations
  }
}

// DETAILS ACTIONS
