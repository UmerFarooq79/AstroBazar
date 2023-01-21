import Repository, { baseUrl } from './Repository';

class MediaRespository {

    async getBannersBySlug(payload) {
        const endPoint = `banners?slug_in=${payload}`;

        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                if (response.data) {
                    return response.data[0].items;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

    async getPromotionsBySlug(payload) {
        const endPoint = `promotions?slug_in=${payload}`;
        const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
            .then((response) => {
                if (response.data) {
                    return response.data[0].items;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

}

export default new MediaRespository();
