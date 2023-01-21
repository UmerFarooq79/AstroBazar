'use strict';
const slugify = require('slugify');


module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.name) {
                console.log(data.name.toLowerCase());
                data.slug = slugify(data.name.toLowerCase());
            }
        },
        beforeUpdate: async (params, data) => {
            data.slug = slugify(data.name.toLowerCase());
        },
    },
};
