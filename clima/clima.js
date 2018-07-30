const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e2a964247b9083e54a9518b2d0c6091d`)
    return resp.data.main.temp;

}
module.exports = {
    getClima
}