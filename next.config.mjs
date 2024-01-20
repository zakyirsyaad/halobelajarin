/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'media.discordapp.net',
            },
        ],
    },
};

export default nextConfig;
