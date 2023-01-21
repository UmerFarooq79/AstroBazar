/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */

import React from 'react';
import StoreRepository from '~/repositories/StoreRepository';

export async function getStoresHelper(pageSize = 12) {
    let stores;
    const queries = {
        _limit: pageSize,
    };
    stores = await StoreRepository.getStores(queries);
    if (stores) {
        return stores;
    } else {
        return null;
    }
}
