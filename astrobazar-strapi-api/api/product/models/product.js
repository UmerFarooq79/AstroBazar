'use strict';
const slugify = require('slugify');
/**
 * Lifecycle callbacks for the `product` model.
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.title) {
                console.log(data.title.toLowerCase());
                data.slug = slugify(data.title.toLowerCase());
            }
        },
        beforeUpdate: async (params, data) => {
            data.slug = slugify(data.title.toLowerCase());
        },
    },
};
