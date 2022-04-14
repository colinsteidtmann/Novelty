/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['api.lorem.space', 'images.unsplash.com'],
    },
};

module.exports = nextConfig;
