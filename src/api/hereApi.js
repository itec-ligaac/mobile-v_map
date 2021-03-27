import axios from 'axios'

export default axios.create({
    baseURL: 'https://geocoder.ls.hereapi.com/6.2/geocode.{format}',
    headers: {
        apikey: '0OocArBszWAX-iH8HNoPuolPIt1tLLTfzABohRuLYtE'
    }
});