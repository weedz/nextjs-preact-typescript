const withPreact = require('next-plugin-preact');

module.exports = withPreact({
    experimental: {
        outputStandalone: true,
    },
    /* regular next.js config options here */
    reactStrictMode: true
});
