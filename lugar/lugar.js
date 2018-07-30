const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    //console.log(JSON.stringify(resp.data, undefined, 2));
    //console.log(resp.status);
    let location = resp.data.results[0];
    let coords = location.geometry.location;
    //console.log(`Dirección: ${location.formatted_address} `);
    //console.log(`lat: ${coords.lat} `);
    //console.log(`lng: ${coords.lng} `);

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}
module.exports = {
    getLugarLatLng
}