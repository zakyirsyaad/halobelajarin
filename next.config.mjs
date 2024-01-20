/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'media.discordapp.net',
                hostname: 'img.freepik.com'
            },
        ],
    },
};

export default nextConfig;
