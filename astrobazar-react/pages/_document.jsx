// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

import React from 'react';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href={'/static/img/favi.png'} />
                <link rel="icon" href={'/static/img/favi.png'} sizes="32x32" />
                <link
                    rel="icon"
                    href={'/static/img/favi.png'}
                    sizes="192x192"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    href={'/static/img/favi.png'}
                />

                <link
                    href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
