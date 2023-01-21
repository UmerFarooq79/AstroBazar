import Repository, { basePostUrl, serializeQuery } from './Repository';

class PostRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getPosts(payload) {
        const endPoint = `posts?${serializeQuery(payload)}`;
        const reponse = await Repository.get(`${basePostUrl}/${endPoint}`)
            .then((response) => {
                if (response.data.length > 0) {
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getPostBySlug(payload) {
        const reponse = await Repository.get(
            `${basePostUrl}/posts?slug=${payload}`
        )
            .then((response) => {
                if (response.data.length > 0) {
                    return response.data[0];
                } else {
                    return null;
                }
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getPostsByCollectionSlug(payload) {
        const endPoint = `collections?${serializeQuery(payload)}`;
        const reponse = await Repository.get(`${basePostUrl}/${endPoint}`)
            .then((response) => {
                if (response.data && response.data[0].posts.length > 0) {
                    return response.data[0].posts;
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

    async getPostItemsByKeyword(payload) {
        const reponse = await Repository.get(
            `${basePostUrl}/posts?title_contains=${payload}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getPostItemsByCategory(payload) {
        const reponse = await Repository.get(
            `${basePostUrl}/posts?title_contains=${payload}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new PostRepository();
