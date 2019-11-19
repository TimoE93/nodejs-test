const axios = require('axios');

module.exports = class Client {
    get_vegconomist() {
        return axios.get('https://vegconomist.com/wp-json/wp/v2/posts?per_page=1').then(result => {
            return result.data;
        })
    }

    get_utopia() {
        return axios.get('https://utopia.de/wp-json/wp/v2/posts?per_page=1').then(result => {
            return result.data;
        })
    }

    get_vegconomist_all() {
        return axios.get('https://vegconomist.com/wp-json/wp/v2/posts?per_page=1');
    }

    get_utopia_all() {
        return axios.get('https://utopia.de/wp-json/wp/v2/posts?per_page=1');
    }

    get_utopiaorg_all() {
        return axios.get('https://utopia.org/wp-json/wp/v2/posts?per_page=1');
    }

    get_multiple_posts() {
        return axios.get('https://vegconomist.com/wp-json/wp/v2/posts?per_page=10').then( result => {
            return result.data;
        });
    }

    get_all_publisher() {
       return axios.all([this.get_vegconomist_all(), this.get_utopia_all(), this.get_utopiaorg_all()]).then(axios.spread(function (veg, utopia, utopiaorg){
            let data = [
                veg.data[0],
                utopia.data[0],
                utopiaorg.data[0]
            ];
           return data;
       }));
    }
};
