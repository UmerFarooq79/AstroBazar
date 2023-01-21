/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */

import React from 'react';
import CollectionRepository from '~/repositories/CollectionRepository';
import ProductRepository from '~/repositories/ProductRepository';

export async function getProductsByCollectionHelper(
    collectionSlug,
    pageSize = 12
) {
    let products;
    if (collectionSlug) {
        products = await CollectionRepository.getProductsByCollectionSlug(
            collectionSlug
        );
    } else {
        const queries = {
            _limit: pageSize,
        };
        products = await ProductRepository.getRecords(queries);
    }

    if (products) {
        return products;
    } else {
        return null;
    }
}

export async function getProductsByCategoriesHelper(slug, pageSize = 12) {
    let products;
    if (slug) {
        products = await CollectionRepository.getProductsByCategorySlug(slug);
    } else {
        const queries = {
            _limit: pageSize,
        };
        products = await ProductRepository.getRecords(queries);
    }

    if (products) {
        return products;
    } else {
        return null;
    }
}
