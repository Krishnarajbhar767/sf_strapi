export default ({ env }) => ({
    upload: {
        config: {
            provider: "cloudinary",
            providerOptions: {
                cloud_name: env("CLOUDINARY_NAME"),
                api_key: env("CLOUDINARY_KEY"),
                api_secret: env("CLOUDINARY_SECRET"),
                secure: true, // forces https
            },
            actionOptions: {
                upload: {
                    resource_type: "auto", // auto-detect image, video, or raw
                },
                delete: {},
            },
        },
    },
});
