import axios from 'axios'

export default axios.create({
    baseURL: 'https://geocode.search.hereapi.com/v1/geocode?q=',
    headers: {
        Authorization: 'Bearer [O5HYffIloG7N2_D_38VGQHEVr2Z0ndXPOlzofi2Ztv4]'
    }
});