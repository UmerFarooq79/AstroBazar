import axios from 'axios';
export const isGrapql = true;
const baseDomain = 'http://localhost:1337';
/*const baseDomain = 'http://45.76.97.89:1337';*/
const authorization_prefix = 'Bearer ';
export const customHeaders = {
    Accept: 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export async function fetchData(query) {
    const response = await axios({
        method: 'POST',
        url: `${baseDomain}/graphql`,
        headers: customHeaders,
        data: {
            query: query,
        },
    });

    return response;
}

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
