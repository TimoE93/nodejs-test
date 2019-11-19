const axios = require('axios');

module.exports = class Client {
    get_vegconomist() {
        return axios.get('https://vegconomist.com/wp-json/wp/v2/posts?per_page=1').then(result => {
            return result.data;
        })
    }
};
