export default [
    "strapi::logger",
    "strapi::errors",
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    // Allow Cloudinary images
                    "img-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "https://market-assets.strapi.io",
                        "https://res.cloudinary.com",
                    ],
                    "media-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        "https://res.cloudinary.com",
                    ],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
