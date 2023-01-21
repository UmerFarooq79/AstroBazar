
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Astro Bazar',
        titleDescription: 'Seller Dashboard',
    },
};

module.exports = withPlugins([withImages(), nextSettings]);
