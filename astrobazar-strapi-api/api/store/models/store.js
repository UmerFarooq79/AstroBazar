'use strict';
const slugify = require('slugify');
/**
 * Lifecycle callbacks for the `product` model.
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.name) {
                data.slug = slugify(data.name.toLowerCase());
            }
        },
        beforeUpdate: async (params, data) => {
            data.slug = slugify(data.name.toLowerCase());
        },
    },
};
