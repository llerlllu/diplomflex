module.exports = {
    i18n: {
        locales: ['rus'],
        defaultLocale: 'rus',
        domains: [
            {
                domain: 'quickbuy.mmtr.ru',
                defaultLocale: 'rus',
                locales: ['rus'],
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};
