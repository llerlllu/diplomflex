/* eslint-disable no-console */
const express = require('express');
const next = require('next');

const devProxy = {
    '/api/v1/auth': {
        target: 'https://auth.quickbuy.mmtr.ru/',
        pathRewrite: { '/api/v1/auth': 'api/v1' },
        changeOrigin: true,
    },
    '/api/v1/products': {
        target: 'https://products.quickbuy.mmtr.ru/',
        pathRewrite: { '/api/v1/products': 'api/v1' },
        changeOrigin: true,
    },
    '/api/v1/seller': {
        target: 'https://seller.quickbuy.mmtr.ru/',
        pathRewrite: { '/api/v1/seller': 'api/v1' },
        changeOrigin: true,
    },
    '/api/v1/customer': {
        target: 'https://customer.quickbuy.mmtr.ru/',
        pathRewrite: { '/api/v1/customer': 'api/v1' },
        changeOrigin: true,
    },
    '/api/v1/review': {
        target: 'https://review.quickbuy.mmtr.ru/',
        pathRewrite: { '/api/v1/review': 'api/v1' },
        changeOrigin: true,
    },
    '/api/v1/statistic': {
        target: 'https://statistic.quickbuy.mmtr.ru/',
        pathRewrite: { '/api/v1/statistic': 'api/v1' },
        changeOrigin: true,
    },
    '/api/v1/search': {
        target: 'https://search.quickbuy.mmtr.ru/',
        pathRewrite: { '/api/v1/search': 'api/v1' },
        changeOrigin: true,
    },
    '/api/v1/subscription': {
        target: 'https://subscription.quickbuy.mmtr.ru/',
        pathRewrite: { '/api/v1/subscription': 'api/v1' },
        changeOrigin: true,
    },
};

const port = parseInt(process.env.PORT, 10) || 5010;
const env = process.env.NODE_ENV;
const dev = true;
const app = next({
    dir: '.',
    dev,
});

const handle = app.getRequestHandler();

let server;
app.prepare()
    .then(() => {
        server = express();

        // Set up the .
        if (devProxy) {
            const { createProxyMiddleware } = require('http-proxy-middleware');
            Object.keys(devProxy).forEach(function (context) {
                server.use(context, createProxyMiddleware(devProxy[context]));
            });
        }

        // Default catch-all handler to allow Next.js to handle all other routes
        server.all('*', (req, res) => handle(req, res));

        server.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log(`> Ready on port ${port} [${env}]`);
        });
    })
    .catch((err) => {
        console.log('An error occurred, unable to start the server');
        console.log(err);
    });
