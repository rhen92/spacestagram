export const getPlanetPics = () => {
  return fetch('https://api.nasa.gov/planetary/apod?&api_key=TpTMyPm4uHLzn8tCrq33k7g72lI3PgeIPepDJ8wf&start_date=2021-08-16&end_date=2021-09-16')
    .then(response => response.json())
}
