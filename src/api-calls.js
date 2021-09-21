let today = new Date();
today = today.toISOString().split('T')[0];
let monthBefore = new Date().setDate(new Date().getDate() - 30)
monthBefore = new Date(monthBefore)
monthBefore = monthBefore.toISOString().split('T')[0];

export const getPlanetPics = () => {
  return fetch(`https://api.nasa.gov/planetary/apod?&api_key=TpTMyPm4uHLzn8tCrq33k7g72lI3PgeIPepDJ8wf&start_date=${monthBefore}&end_date=${today}`)
    .then(response => response.json())
}
