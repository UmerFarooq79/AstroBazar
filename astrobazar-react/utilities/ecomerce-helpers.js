/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */

import React from 'react';
import cookies from 'js-cookie';
import { getProductsByIds } from '~/repositories/ProductRepository';

export function getCartItemsFromCookies() {
    const cartItems = cookies.get('cart');
    if (cartItems) {
        return JSON.parse(cartItems);
    } else {
        return null;
    }
}

export function updateCartToCookies(payload) {
    cookies.set('cart', payload, { path: '/', expires: 24 * 7 });
}

export function addItemToCartHelper(product) {
    let cart;
    let cookieCart = getCartItemsFromCookies();
    if (cookieCart) {
        cart = cookieCart;
        const existItem = cart.items.find((item) => item.id === product.id);
        if (existItem) {
            existItem.quantity += product.quantity;
        } else {
            /* if (!product.quantity) {
                product.quantity = 1;
            }*/
            cart.items.push(product);
        }
    } else {
        cart = {
            items: [],
        };
        cart.items.push(product);
    }
    updateCartToCookies(cart);
    return cart;
}

export function increaseQtyCartItemHelper(product) {
    let cart;
    let cookieCart = getCartItemsFromCookies();
    if (cookieCart) {
        cart = cookieCart;
        const selectedItem = cart.items.find((item) => item.id === product.id);

        if (selectedItem) {
            selectedItem.quantity = selectedItem.quantity + 1;
        }
        updateCartToCookies(cart);
        return cart;
    }
}

export function decreaseQtyCartItemHelper(product) {
    let cart;
    let cookieCart = getCartItemsFromCookies();
    if (cookieCart) {
        cart = cookieCart;
        const selectedItem = cart.items.find((item) => item.id === product.id);

        if (selectedItem) {
            selectedItem.quantity = selectedItem.quantity - 1;
        }
        updateCartToCookies(cart);
        return cart;
    }
}

export function removeCartItemHelper(product) {
    let cart;
    let cookieCart = getCartItemsFromCookies();
    if (cookieCart) {
        cart = cookieCart;
        const index = cart.items.findIndex((item) => item.id === product.id);
        cart.items.splice(index, 1);
        updateCartToCookies(cart);
        return cart;
    }
}

// new

export function calculateAmount(obj) {
    return Object.values(obj)
        .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
        .toFixed(2);
}

export function calculateCartQuantity(obj) {
    return Object.values(obj).reduce((acc, { quantity }) => acc + quantity, 0);
}

export function caculateArrayQuantity(obj) {
    return Object.values(obj).reduce((acc) => acc + 1, 0);
}
